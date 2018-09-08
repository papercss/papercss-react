import React from "react";
import { PaperTypography } from "react-paper-css";

import PropsPresenter from "../../PropsPresenter";

const ButtonDoc = () => (
  <PaperTypography>
    <p>
      You can customize button colors with primary, secondary, success, warning,
      danger classes or set button size with large or small.
    </p>
    <PropsPresenter
      code={`
type Props = {
  size?: 'small' | 'large';
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
} & React.AllHTMLAttributes<HTMLDivElement>;
`}
    />
  </PaperTypography>
);

export default ButtonDoc;
