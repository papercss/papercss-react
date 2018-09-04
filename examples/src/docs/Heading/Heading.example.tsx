import React from "react";
import { Heading } from "react-paper-css";

const Example = (
  <>
    <Heading as="h2">This is super important heading.</Heading>
    <Heading
      as="h4"
      style={{
        color: "darkblue",
      }}
    >
      And this one isn't so important.
    </Heading>
  </>
);

export default Example;
