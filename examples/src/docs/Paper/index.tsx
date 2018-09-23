import { PropsTable } from "docz";
import { readFileSync } from "fs";
import React from "react";
import { Paper } from "react-paper-css";

import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

export default () => (
  <>
    <PropsTable of={Paper} />
    <Sandbox source={source} />
  </>
);
