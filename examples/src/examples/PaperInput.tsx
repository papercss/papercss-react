import React from "react";
import { PaperInput } from "react-paper-css";

const props = `
type Props = {
  block?: boolean;
  label?: React.ReactNode;
  inputSize?: string;
  inputID?: string;
  placeholder?: string;
  disabled?: boolean;
}`.trim();

const Example = (
  <>
    <h2>Props</h2>
    <pre>{props}</pre>
    <section>
      <span>A standard input with no label.</span>
      <PaperInput />
      <span>Block Level 100% width input.</span>
      <PaperInput block />
    </section>
  </>
);

export default Example;
