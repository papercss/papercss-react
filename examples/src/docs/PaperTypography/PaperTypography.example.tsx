import React from "react";
import { PaperTypography } from "react-paper-css";

const Example = (
  <>
    <PaperTypography>
      <h1>Header.</h1>
      Look at this text.
    </PaperTypography>
    Normal text here!
    <PaperTypography as="section">
      And here we are sketchy again!
    </PaperTypography>
  </>
);

export default Example;
