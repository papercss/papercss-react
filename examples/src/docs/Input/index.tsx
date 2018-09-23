import { Playground } from "docz";
import { readFileSync } from "fs";
import React from "react";
import { Typography } from "react-paper-css";

import HighlightedCode from "../../HighlightedCode";
import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

const PaperInputDoc = () => (
  <Typography>
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

export default PaperInputDoc;
