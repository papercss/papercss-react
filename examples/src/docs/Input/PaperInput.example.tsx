import React from "react";
import { PaperInput } from "react-paper-css";

const Example = (
  <>
    <section>
      <span>A standard input with no label.</span>
      <PaperInput />
      <span>Block Level 100% width input.</span>
      <PaperInput block />
    </section>
  </>
);

export default Example;
