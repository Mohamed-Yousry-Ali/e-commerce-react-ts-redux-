import type { TLoading } from "@types";
import type { ReactNode } from "react";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
type TLoadingProps = {
  loading: TLoading | boolean;
  error: string | null | FetchBaseQueryError | SerializedError | undefined;
  children: ReactNode;
};
const Loading = ({ loading, error, children }: TLoadingProps) => {
  if (loading === "pending") {
    return <p>Loading ...</p>;
  }
  if (loading === "failed" && error === "FetchBaseQueryError") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
};

export default Loading;
