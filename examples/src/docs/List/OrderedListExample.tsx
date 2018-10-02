import React from "react";
import { List, Typography } from "react-paper-css";

const OrderedListExample = (
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
    </ol>
  </List>
);

export default OrderedListExample;
