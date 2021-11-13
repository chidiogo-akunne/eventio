import React from "react";
import { ReactComponent as Loader } from "../../../assets/images/loading.svg";

import { Container } from "./styles";

export default function LoaderComponent() {
  //loading spinner component
  return (
    <Container>
      <Loader className="loading" />
    </Container>
  );
}
