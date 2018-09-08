import React from "react";
import { PaperTypography } from "react-paper-css";

import HighlightedCode from "../../HighlightedCode";

const BadgeDoc = () => (
  <PaperTypography>
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
  </PaperTypography>
);

export default BadgeDoc;
