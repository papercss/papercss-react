import React from "react";
import { List, Typography } from "react-paper-css";

const MixedListExample = (
  <List ordered>
    <li>1st level</li>
    <ol>
      <li>2nd level</li>
      <ol>
        <li>3rd level</li>
        <ol>
          <li>4th level</li>
          <ol>
            <li>5th level</li>
          </ol>
        </ol>
      </ol>
      <ul>
        <li>3rd level</li>
        <ul>
          <li>4th level</li>
          <ul>
            <li>5th level</li>
          </ul>
        </ul>
      </ul>
    </ol>
  </List>
);

export default MixedListExample;
