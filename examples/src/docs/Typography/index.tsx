import { readFileSync } from "fs";
import React from "react";
import { Typography } from "react-paper-css";
import { Link } from "react-router-dom";

import { H3 } from "../../Headings";
import Sandbox from "../../Sandbox";

const source = readFileSync(`${__dirname}/Example.tsx`, "utf-8");

const TypographyDoc = () => (
  <div>
    <Typography>
      <H3>Typography</H3>
      <p>
        Typography component provides his children with text styles.
        <br />
        If you need only some of the styles, take a look at{" "}
        <Link to="/Heading">Heading</Link> and <Link to="/Text">Text</Link>
      </p>
    </Typography>
    <Sandbox source={source} />
  </div>
);

export default TypographyDoc;
