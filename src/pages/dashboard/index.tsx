import React, { useState } from "react";
import Layout from "../../components/layout/dashboardLayout";
import { ReactComponent as CaretDown } from "../../assets/images/icons/caret-down.svg";
import { ReactComponent as Grid } from "../../assets/images/icons/grid.svg";
import { ReactComponent as List } from "../../assets/images/icons/list.svg";
import Button from "../../components/commons/button";
import EventGridCard from "../../components/commons/eventGridCard";
import Colors from "../../constants/colors";

import { Container, Header, LeftCover, RightCover, EventList } from "./styles";

export default function Dasboard() {
  const [filterEvent, setFilterEvent] = useState("ALL EVENTS");
  const [grid, setGrid] = useState(true);
  const [isvisble, setIsvisible] = useState(false);

  return (
    <Layout create={true}>
      <Container>
        <Header>
          <LeftCover>
            <div className="mobile">
              <p>SHOW:</p>
              <p className="filterEvent">{filterEvent}</p>
              <div
                className="dropdown"
                onClick={() => setIsvisible(!isvisble)}
                onBlur={() => setIsvisible(false)}
              >
                <CaretDown />
              </div>
              <div
                className="dropdown-content"
                style={{ display: isvisble ? "block" : "none" }}
              >
                <ul>
                  <li
                    onClick={() => {
                      setFilterEvent("ALL EVENTS");
                      setIsvisible(false);
                    }}
                  >
                    ALL EVENTS
                  </li>
                  <li
                    onClick={() => {
                      setFilterEvent("FUTURE EVENTS");
                      setIsvisible(false);
                    }}
                  >
                    FUTURE EVENTS
                  </li>
                  <li
                    onClick={() => {
                      setFilterEvent("PAST EVENTS");
                      setIsvisible(false);
                    }}
                  >
                    PAST EVENTS
                  </li>
                </ul>
              </div>
            </div>
            <div className="desktop">
              <p
                onClick={() => {
                  setFilterEvent("ALL EVENTS");
                }}
                style={{
                  color:
                    filterEvent === "ALL EVENTS"
                      ? Colors.darkGrey
                      : Colors.greyText,
                }}
              >
                ALL EVENTS
              </p>
              <p
                onClick={() => {
                  setFilterEvent("FUTURE EVENTS");
                }}
                style={{
                  color:
                    filterEvent === "FUTURE EVENTS"
                      ? Colors.darkGrey
                      : Colors.greyText,
                }}
              >
                FUTURE EVENTS
              </p>
              <p
                onClick={() => {
                  setFilterEvent("PAST EVENTS");
                }}
                style={{
                  color:
                    filterEvent === "PAST EVENTS"
                      ? Colors.darkGrey
                      : Colors.greyText,
                }}
              >
                PAST EVENTS
              </p>
            </div>
          </LeftCover>
          <RightCover>
            <Button
              onClick={() => setGrid(true)}
              buttonClass={grid ? "gridVisible" : "gridNonVisible"}
            >
              <Grid />
            </Button>
            <Button
              onClick={() => setGrid(false)}
              buttonClass={grid ? "listNonVisible" : "listVisible"}
            >
              <List />
            </Button>
          </RightCover>
        </Header>
        <EventList>
          <EventGridCard grid={grid} />
          <EventGridCard grid={grid} />
          <EventGridCard grid={grid} />
        </EventList>
      </Container>
    </Layout>
  );
}
