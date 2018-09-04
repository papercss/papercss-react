import React from "react";

import PropsPresenter from "../../PropsPresenter";

const PaperInputDoc = () => (
  <PropsPresenter
    code={`
type Props = {
  block?: boolean;
  label?: React.ReactNode;
  inputSize?: string;
  inputID?: string;
  placeholder?: string;
  disabled?: boolean;
} & React.AllHTMLAttributes<HTMLDivElement>;
`}
  />
);

export default PaperInputDoc;
