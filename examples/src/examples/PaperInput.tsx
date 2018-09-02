import React from "react";
import { PaperInput } from "react-paper-css";

import Example from "../Example";

const Element = (
  <>
    A standard input with no label.
    <PaperInput />
    Block Level 100% width input.
    <PaperInput block />
  </>
);

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
