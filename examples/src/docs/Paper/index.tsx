import { readFileSync } from "fs";
import React from "react";

import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

export default () => <Sandbox source={source} />;
