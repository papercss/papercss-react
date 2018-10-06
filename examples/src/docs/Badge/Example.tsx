import React from "react";
import { Badge, Typography } from "react-paper-css";

const Example = (
  <Typography>
    <h1>Example heading h1 <Badge type='primary'>Primary</Badge></h1>
    <h2>Example heading h2 <Badge type='secondary'>Secondary</Badge></h2>
    <h3>Example heading h3 <Badge type='success'>Success</Badge></h3>
    <h4>Example heading h4 <Badge type='warning'>Warning</Badge></h4>
    <h5>Example heading h5 <Badge type='danger'>Danger</Badge></h5>
    <h6>Example heading h6 <Badge>Default</Badge></h6>
  </Typography>
);

export default Example;
