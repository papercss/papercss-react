import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Examples from "./Examples";

const App = () => (
  <Router>
    <Examples />
  </Router>
);
const root = document.getElementById("root");

if (root) {
  render(<App />, root);
} else {
  throw new Error('We need element with id="root"');
}
