import React, { Suspense } from "react";
import Loader from "../loader";

//import style
import { LoaderWrapper } from "./styles";

export default function SuspenseBoundary(
  props: React.PropsWithChildren<unknown>
) {
  function Loading() {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  //check if loading is false before mountiing children
  return <Suspense fallback={Loading}>{props.children}</Suspense>;
}
