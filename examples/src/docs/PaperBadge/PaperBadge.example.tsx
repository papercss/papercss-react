import React from "react";
import { PaperBadge, PaperTypography } from "react-paper-css";

const Example = (
  <PaperTypography>
    <h1>Example heading h1 <PaperBadge type='primary'>Primary</PaperBadge></h1>
    <h2>Example heading h2 <PaperBadge type='secondary'>Secondary</PaperBadge></h2>
    <h3>Example heading h3 <PaperBadge type='success'>Success</PaperBadge></h3>
    <h4>Example heading h4 <PaperBadge type='warning'>Warning</PaperBadge></h4>
    <h5>Example heading h5 <PaperBadge type='danger'>Danger</PaperBadge></h5>
    <h6>Example heading h6 <PaperBadge>Default</PaperBadge></h6>
  </PaperTypography>
);

export default Example;
