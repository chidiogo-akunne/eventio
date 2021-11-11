import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/signupLayout";
import Button from "../../components/commons/button";

import { Container, Wrapper } from "./styles";

export default function NotFoundPage() {
  return (
    <Layout newUser={false}>
      <Wrapper>
        <Container>
          <h4>404 Error - page not found</h4>
          <p>
            Seems like Darth Vader just hits our website and drops it down.
            Please press the refresh button and everything should be fine again.{" "}
          </p>
          <br />
          <Link to="/">
            <Button value="REFRESH" />
          </Link>
        </Container>
      </Wrapper>
    </Layout>
  );
}
