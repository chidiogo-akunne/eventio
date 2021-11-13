import React from 'react';
import Card from '../card';
import { ReactComponent as MemberIcon } from '../../../assets/images/icons/user.svg';
import Button from '../button';
import { timeConverter } from '../../../utils/timeConverter';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { fetchEvents } from '../../../network/queries';
import { useAppContext } from '../../../context/app/appContext';
import { attendEvent, unattendEvent } from '../../../network/mutation';

import {
  Container,
  Row,
  CardWrapper,
  ColumnCard,
  ColumnContainer,
  Col
} from './styles';

//typings for event card
interface EventCardProps {
  grid: boolean;
  attendees: any[];
  capacity: number;
  description: string;
  id: string;
  startsAt: string;
  title: string;
  joined: boolean;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  onAttandanceChange?: () => void;
  loading?: boolean;
}

//grid view of event card
function GridView(props: EventCardProps) {
  const {
    capacity,
    description,
    startsAt,
    title,
    owner,
    attendees,
    joined,
    loading
  } = props;

  return (
    <CardWrapper>
      <Card cardClass="card">
        <Container>
          <p>{timeConverter(new Date(startsAt))}</p>
          <h2>{title}</h2>
          <p className="creator">{`${owner.firstName} ${owner.lastName}`}</p>
          <p className="description">{description}</p>
          <Row>
            <div className="capacity">
              <MemberIcon />
              <p>{`${attendees?.length} of ${capacity}`}</p>
            </div>
            <Button
              loading={loading}
              value={joined ? 'LEAVE' : 'JOIN'}
              buttonClass={joined ? 'leave' : 'join'}
              onClick={props.onAttandanceChange}
            />
          </Row>
        </Container>
      </Card>
    </CardWrapper>
  );
}

//list view of event card
function ListView(props: EventCardProps) {
  const {
    capacity,
    description,
    startsAt,
    title,
    owner,
    attendees,
    joined,
    loading
  } = props;

  //cut description text if the length is more than 30 characters
  const shortText =
    description?.length > 30
      ? description.substring(0, 24) + '...'
      : description;

  return (
    <ColumnCard>
      <Card cardClass="col-card">
        <ColumnContainer>
          <h2 className="lg-title">{title}</h2>
          <p className="col-description lg-description">{shortText}</p>
          <p className="col-creator">{`${owner.firstName} ${owner.lastName}`}</p>
          <div className="col-large">
            <p className="createdAt lg-startedAt">
              {timeConverter(new Date(startsAt))}
            </p>
            <p className="lg-capacity">{`${attendees?.length} of ${capacity}`}</p>
          </div>
          <Col>
            <div className="col-capacity">
              <p className="createdAt">{timeConverter(new Date(startsAt))}</p>
              <p>{`${attendees?.length} of ${capacity}`}</p>
            </div>
            <Button
              loading={loading}
              value={joined ? 'LEAVE' : 'JOIN'}
              buttonClass={joined ? 'leave' : 'join'}
              onClick={props.onAttandanceChange}
            />
          </Col>
        </ColumnContainer>
      </Card>
    </ColumnCard>
  );
}

//fetch event and also pass a select function to be able to filter the data
const useEventsQuery = (select: any) =>
  useQuery(['events'], fetchEvents, { select });

//filter data event to get the event that matches the id
const useEvent = (id: string) =>
  useEventsQuery((data: any) => data.find((event: any) => event.id === id));

export default function EventGridCard(props: EventCardProps) {
  const { data } = useEvent(props.id);
  const { displayMode } = useAppContext();
  const queryClient = useQueryClient();

  // const attendMutation = useMutation(() => {
  //   return attendEvent(props.id);
  // });

  // const unAttendMutation = useMutation(() => {
  //   return unattendEvent(props.id);
  // });

  // if (attendMutation.isSuccess) {
  //   queryClient.invalidateQueries("events");
  // }

  // if (unAttendMutation.isSuccess) {
  //   queryClient.invalidateQueries("events");
  // }

  //mutation to join an event and refetch events after successfully joing.
  const attendMutation = useMutation(attendEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries('events');
    }
  });

  //mutation to leav an event and refetch events after successfully leaving.
  const unAttendMutation = useMutation(unattendEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries('events');
    }
  });

  //check if card display mode is grid
  const showGrid = displayMode === 'grid';

  function handleEventAttendance() {
    //check if user has joined an event, if true, leave event, else join event
    if (props.joined) {
      unAttendMutation.mutate(props.id);
      return;
    }
    attendMutation.mutate(props.id);
  }

  //event card component
  return (
    <>
      {showGrid ? (
        <GridView
          {...data}
          joined={props.joined}
          loading={
            props.joined ? unAttendMutation.isLoading : attendMutation.isLoading
          }
          onAttandanceChange={handleEventAttendance}
        />
      ) : (
        <ListView
          {...data}
          loading={
            props.joined ? unAttendMutation.isLoading : attendMutation.isLoading
          }
          joined={props.joined}
          onAttandanceChange={handleEventAttendance}
        />
      )}
    </>
  );
}
