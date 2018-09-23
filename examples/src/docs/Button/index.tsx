import { readFileSync } from "fs";
import React from "react";
import { Typography } from "react-paper-css";

import { H3 } from "../../Headings";
import HighlightedCode from "../../HighlightedCode";
import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

const ButtonDoc = () => (
  <Typography>
    <H3>Badge</H3>
    <HighlightedCode
      code={`
type Props = {
  size?: 'small' | 'large';
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
} & React.AllHTMLAttributes<HTMLButtonElement>;
`}
    />
    <Sandbox source={source} />
  </Typography>
);

export default ButtonDoc;
