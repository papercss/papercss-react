import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import Pages from "./Pages";

const App = () => (
  <Router>
    <Pages />
  </Router>
);

render(<App />, document.getElementById("root"));
