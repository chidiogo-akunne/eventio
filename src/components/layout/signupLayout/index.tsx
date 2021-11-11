import React from "react";
import Navbar from "../../commons/navBar";

import { Container, LeftSection, RightSection } from "./styles";

interface SignupLayoutProps extends React.PropsWithChildren<unknown> {
  newUser: boolean;
}

export default function SignupLayout(props: SignupLayoutProps) {
  const { children, newUser } = props;
  return (
    <Container>
      <Navbar authenticated={false} newUser={newUser} />
      <LeftSection>
        <div className="bottom-text">
          <h1>“Great, kid. Don’t get cocky.”</h1>
          <hr />
          <p>Han Solo</p>
        </div>
      </LeftSection>
      <RightSection>{children}</RightSection>
    </Container>
  );
}
