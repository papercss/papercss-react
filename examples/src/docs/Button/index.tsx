import React from "react";
import { Typography } from "react-paper-css";

import HighlightedCode from "../../HighlightedCode";

const ButtonDoc = () => (
  <Typography>
    <HighlightedCode
      code={`
type Props = {
  size?: 'small' | 'large';
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
} & React.AllHTMLAttributes<HTMLDivElement>;
`}
    />
  </Typography>
);

export default ButtonDoc;
