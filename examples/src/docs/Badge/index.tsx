import { readFileSync } from "fs";
import React from "react";
import { Typography } from "react-paper-css";

import { H3 } from "../../Headings";
import HighlightedCode from "../../HighlightedCode";
import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

const BadgeDoc = () => (
  <Typography>
    <H3>Badge</H3>
    <p>
      You can customize badges colors with primary, secondary, success, warning,
      danger classes.
    </p>
    <HighlightedCode
      code={`
type Props = {
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  as?: keyof React.ReactHTML;
} & React.AllHTMLAttributes<HTMLDivElement>;
`}
    />
    <Sandbox source={source} />
  </Typography>
);

export default BadgeDoc;
