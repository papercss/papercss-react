import React from "react";
import { Typography } from "react-paper-css";

import HighlightedCode from "../../HighlightedCode";

const BadgeDoc = () => (
  <Typography>
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
  </Typography>
);

export default BadgeDoc;
