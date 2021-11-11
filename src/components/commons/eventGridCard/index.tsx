import React from "react";
import Card from "../card";
import { ReactComponent as MemberIcon } from "../../../assets/images/icons/user.svg";
import Button from "../button";

import {
  Container,
  Row,
  CardWrapper,
  ColumnCard,
  ColumnContainer,
  Col,
} from "./styles";

interface EventGridCardProps {
  grid: boolean;
}

export default function EventGridCard(props: EventGridCardProps) {
  const { grid } = props;
  return (
    <>
      {grid ? (
        <CardWrapper>
          <Card cardClass="card">
            <Container>
              <p>April 4, 2017 – 2:17 PM</p>
              <h2>How to get angry</h2>
              <p className="creator">Tom Watts</p>
              <p className="description">
                I will show you how to get angry in a second
              </p>
              <Row>
                <div className="capacity">
                  <MemberIcon />
                  <p>9 of 31</p>
                </div>
                <Button value="JOIN" />
              </Row>
            </Container>
          </Card>
        </CardWrapper>
      ) : (
        <ColumnCard>
          <Card cardClass="col-card">
            <ColumnContainer>
              <h2>How to get angry</h2>
              <p className="col-description">
                I will show you how to get angry in a second
              </p>
              <p className="col-creator">Tom Watts</p>
              <div className="col-large">
                <p className="createdAt">April 4, 2017 – 2:17 PM</p>
                <p>9 of 31</p>
              </div>
              <Col>
                <div className="col-capacity">
                  <p className="createdAt">April 4, 2017 – 2:17 PM</p>
                  <p>9 of 31</p>
                </div>
                <Button value="JOIN" />
              </Col>
            </ColumnContainer>
          </Card>
        </ColumnCard>
      )}
    </>
  );
}
