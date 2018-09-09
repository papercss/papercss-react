import React from "react";
import { Button, Typography } from "react-paper-css";

const Example = (
  <>
    <Typography>
      <div>Different sizes</div>
      <ButtonBox columns={3}>
        <Button>Default</Button>
        <Button size="small">Small</Button>
        <Button size="large">Large</Button>
      </ButtonBox>
    </Typography>
    <Typography>
      <div>Disabled button</div>
      <Button disabled={true}>Disabled</Button>
    </Typography>
    <Typography>
      <div>Colors</div>
      <ButtonBox columns={5}>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </ButtonBox>
    </Typography>
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
