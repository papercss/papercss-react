import { PropsTable } from "docz";
import { readFileSync } from "fs";
import React from "react";
// import * as docgen from "react-docgen-typescript";
import { Paper } from "react-paper-css";

import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

// const info = docgen.parse("../../Sandbox/index.tsx");

// (Paper as any).__docgenInfo = info;

export default () => (
  <>
    <PropsTable of={Paper} />
    <Sandbox source={source} />
  </>
);
