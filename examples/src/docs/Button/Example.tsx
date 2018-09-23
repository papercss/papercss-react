import React from "react";
import { Button, Typography } from "react-paper-css";

const Example = (
  <Typography>
    <section>
      <div>Different sizes</div>
      <ButtonBox columns={3}>
        <Button>Default</Button>
        <Button size="small">Small</Button>
        <Button size="large">Large</Button>
      </ButtonBox>
    </section>
    <section>
      <div>Disabled button</div>
      <Button disabled={true}>Disabled</Button>
    </section>
    <section>
      <div>Colors</div>
      <ButtonBox columns={5}>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </ButtonBox>
    </section>
  </Typography>
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
