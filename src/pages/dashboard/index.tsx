import React, { useState } from "react";
import { useQuery } from "react-query";
import { isPast, isFuture } from "date-fns";
import cc from "classcat";
import Layout from "../../components/layout/dashboardLayout";
import { ReactComponent as CaretDown } from "../../assets/images/icons/caret-down.svg";
import { ReactComponent as Grid } from "../../assets/images/icons/grid.svg";
import { ReactComponent as List } from "../../assets/images/icons/list.svg";
import Button from "../../components/commons/button";
import EventGridCard from "../../components/commons/eventGridCard";
import Colors from "../../constants/colors";
import { fetchEvents } from "../../network/queries";
import Loader from "../../components/commons/loader";
import { useAppContext } from "../../context/app/appContext";
import { useAuthContext } from "../../context/auth/authContext";

import {
  Container,
  Header,
  LeftCover,
  RightCover,
  EventList,
  LoaderWrapper,
} from "./styles";

export default function Dasboard() {
  //fetch all events using useQuery
  const { data, isLoading } = useQuery("events", fetchEvents);

  //get display mode and event data view from app store
  const {
    displayMode,
    filterView,
    changeDisplayMode,
    changeFilterView,
  } = useAppContext();

  //get auth details from auth store
  const auth = useAuthContext();

  const [isVisible, setIsVisible] = useState(false);

  const userId = auth.user.id;

  //display spinner if data is loading
  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  //event data type
  type EventType = {
    id: string;
    startsAt: string;
    attendees: any[];
    [key: string]: any;
    owner: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    capacity: number;
    description: string;
    title: string;
  };

  //filter event data and check if loggin user joined event, pass data to event card
  const records = data
    .filter((event: EventType) => {
      switch (filterView) {
        case "FUTURE EVENTS":
          return isFuture(new Date(event.startsAt));

        case "PAST EVENTS":
          return isPast(new Date(event.startsAt));

        default:
          return true;
      }
    })
    .map((event: EventType) => {
      const joined = event?.attendees.find(
        (attendee) => attendee.id === userId
      );

      return (
        <EventGridCard
          key={event.id}
          {...event}
          grid={displayMode === "grid"}
          joined={!!joined}
        />
      );
    });

  return (
    <Layout create={true}>
      <Container>
        <>
          <Header>
            <LeftCover>
              <div className="mobile">
                <p>SHOW:</p>
                <p className="filterEvent">{filterView}</p>
                <div
                  className="dropdown"
                  onClick={() => setIsVisible(!isVisible)}
                  onBlur={() => setIsVisible(false)}
                >
                  <CaretDown />
                </div>
                <div
                  className="dropdown-content"
                  style={{ display: isVisible ? "block" : "none" }}
                >
                  <ul>
                    <li>
                      <button
                        onClick={() => {
                          changeFilterView("ALL EVENTS");
                          setIsVisible(false);
                        }}
                      >
                        ALL EVENTS
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          changeFilterView("FUTURE EVENTS");
                          setIsVisible(false);
                        }}
                      >
                        FUTURE EVENTS
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          changeFilterView("PAST EVENTS");
                          setIsVisible(false);
                        }}
                      >
                        PAST EVENTS
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="desktop">
                <button
                  onClick={() => {
                    changeFilterView("ALL EVENTS");
                  }}
                  style={{
                    color:
                      filterView === "ALL EVENTS"
                        ? Colors.darkGrey
                        : Colors.greyText,
                  }}
                >
                  ALL EVENTS
                </button>
                <button
                  onClick={() => {
                    changeFilterView("FUTURE EVENTS");
                  }}
                  style={{
                    color:
                      filterView === "FUTURE EVENTS"
                        ? Colors.darkGrey
                        : Colors.greyText,
                  }}
                >
                  FUTURE EVENTS
                </button>
                <button
                  onClick={() => {
                    changeFilterView("PAST EVENTS");
                  }}
                  style={{
                    color:
                      filterView === "PAST EVENTS"
                        ? Colors.darkGrey
                        : Colors.greyText,
                  }}
                >
                  PAST EVENTS
                </button>
              </div>
            </LeftCover>
            <RightCover>
              <Button
                onClick={() => changeDisplayMode("grid")}
                buttonClass={cc({
                  gridVisible: displayMode === "grid",
                  gridNonVisible: displayMode !== "grid",
                })}
              >
                <Grid />
              </Button>
              <Button
                onClick={() => changeDisplayMode("list")}
                buttonClass={cc({
                  listVisible: displayMode === "list",
                  listNonVisible: displayMode !== "list",
                })}
              >
                <List />
              </Button>
            </RightCover>
          </Header>
          <EventList>{records}</EventList>
        </>
      </Container>
    </Layout>
  );
}
