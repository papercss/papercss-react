import React from "react";

import Example from "../Example";

const PaperButton = () => (
  <Example
    name="PaperButton"
    initialSource={`import React from "react";
import { PaperButton } from "react-paper-css";

const Example = <PaperButton>Click me!</PaperButton>;

export default Example;
`}
  />
);

export default PaperButton;
