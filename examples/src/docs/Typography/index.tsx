import { readFileSync } from "fs";
import React from "react";
import { Typography } from "react-paper-css";

import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

const TypographyDoc = () => (
  <Typography>
    <p>Typography component provides his children with text styles.</p>
    <Sandbox source={source} />
  </Typography>
);

export default TypographyDoc;
