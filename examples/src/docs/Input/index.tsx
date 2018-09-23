import React from "react";

import HighlightedCode from "../../HighlightedCode";

const PaperInputDoc = () => (
  <HighlightedCode
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
