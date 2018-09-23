import React from "react";

type ErrorContainerProps = { error: Error };
const ErrorContainer = ({ error }: ErrorContainerProps) =>
  error && (
    <div>
      <code>{error.toString()}</code>
    </div>
  );

export default ErrorContainer;
