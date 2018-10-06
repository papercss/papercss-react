import { readFileSync } from "fs";
import React from "react";

import { H3 } from "../../Headings";
import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

export default () => (
  <div>
    <H3>Text</H3>
    <Sandbox source={source} />
  </div>
);
