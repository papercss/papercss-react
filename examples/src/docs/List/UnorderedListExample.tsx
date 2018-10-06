import React from "react";
import { List, Typography } from "react-paper-css";

const UnorderedListExample = (
  <List>
    <li>1st level</li>
    <ul>
      <li>2nd level</li>
      <ul>
        <li>3rd level</li>
        <ul>
          <li>4th level</li>
          <ul>
            <li>5th level</li>
          </ul>
        </ul>
      </ul>
    </ul>
  </List>
);

export default UnorderedListExample;
