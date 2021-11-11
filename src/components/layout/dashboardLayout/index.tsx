import React from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import Navbar from "../../commons/navBar";
import Colors from "../../../constants/colors";

import { Container, Main, BottomButton } from "./styles";

interface DashboardLayoutProps extends React.PropsWithChildren<unknown> {
  create: boolean;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { create, children } = props;
  const linkTo = create ? "/create-event" : "/edit";
  return (
    <Container>
      <Navbar
        authenticated={true}
        newUser={false}
        style={{ backgroundColor: Colors.offWhite }}
      />
      <Main>{children}</Main>
      <BottomButton to={linkTo}>
        {create ? <AiOutlinePlus /> : <AiOutlineCheck />}
      </BottomButton>
    </Container>
  );
}
