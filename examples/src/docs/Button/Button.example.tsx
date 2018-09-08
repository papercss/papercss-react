import React from "react";
import { Button, PaperTypography } from "react-paper-css";

const Example = (
  <>
    <PaperTypography>
      <div>Different sizes</div>
      <ButtonBox columns={3}>
        <Button>Default</Button>
        <Button size="small">Small</Button>
        <Button size="large">Large</Button>
      </ButtonBox>
    </PaperTypography>
    <PaperTypography>
      <div>Disabled button</div>
      <Button disabled={true}>Disabled</Button>
    </PaperTypography>
    <PaperTypography>
      <div>Colors</div>
      <ButtonBox columns={5}>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </ButtonBox>
    </PaperTypography>
  </>
);

function ButtonBox({ columns, children }) {
  return (
    <div
      style={{
        columnGap: "20px",
        display: "inline-grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}

export default Example;
