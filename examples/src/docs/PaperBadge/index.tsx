import React from "react";
import { PaperTypography } from "react-paper-css";

import PropsPresenter from "../../PropsPresenter";

const PaperBadgeDoc = () => (
  <PaperTypography>
    <p>You can customize badges colors with primary, secondary, success, warning, danger classes.</p>
    <PropsPresenter
      code={`
type Props = {
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  as?: keyof React.ReactHTML;
} & React.AllHTMLAttributes<HTMLDivElement>;
`}
    />
  </PaperTypography>
);

export default PaperBadgeDoc;
