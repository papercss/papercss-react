import { readFileSync } from "fs";
import React from "react";
import { Typography } from "react-paper-css";

import { H3 } from "../../Headings";
import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

const TypographyDoc = () => (
  <Typography>
    <H3>Typography</H3>
    <p>Typography component provides his children with text styles.</p>
    <Sandbox source={source} />
  </Typography>
);

export default TypographyDoc;
