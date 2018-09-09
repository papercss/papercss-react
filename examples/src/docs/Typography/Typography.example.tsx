import React from "react";
import { Typography } from "react-paper-css";

const Example = (
  <>
    <Typography>
      <h1 style={{ margin: "5px 0 5px 0" }}>Header.</h1>
      Look at this text.
    </Typography>
    Normal text here!
    <Typography as="section">And here we are sketchy again!</Typography>
  </>
);

export default Example;
