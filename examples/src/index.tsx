import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ExamplesList from "./ExamplesList";

const App = () => (
  <main>
    <Router>
      <ExamplesList />
    </Router>
  </main>
);

render(<App />, document.getElementById("root"));
