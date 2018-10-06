import { readFileSync } from "fs";
import React from "react";

import { H3 } from "../../Headings";
import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

(window as any).system = (window as any).system || {
  newLine: "\n",
};

export default () => (
  <>
    <H3>Paper</H3>
    <Sandbox source={source} />
  </>
);
