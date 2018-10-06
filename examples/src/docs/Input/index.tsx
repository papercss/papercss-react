import { Playground } from "docz";
import { readFileSync } from "fs";
import React from "react";
import { Typography } from "react-paper-css";

import { H3 } from "../../Headings";
import HighlightedCode from "../../HighlightedCode";
import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

const InputDoc = () => (
  <Typography>
    <H3>Input</H3>
    <HighlightedCode
      code={`
type Props = {
  block?: boolean;
  label?: React.ReactNode;
  inputId?: string;
  placeholder?: string;
  disabled?: boolean;
} & React.AllHTMLAttributes<HTMLDivElement>;
`}
    />
    <Sandbox source={source} />
  </Typography>
);

export default InputDoc;
