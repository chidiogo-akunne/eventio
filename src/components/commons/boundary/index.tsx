import React, { Suspense } from "react";
import Loader from "../loader";

//import style
import { LoaderWrapper } from "./styles";

function Loading() {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
}

export default function SuspenseBoundary(
  props: React.PropsWithChildren<unknown>
) {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
}
