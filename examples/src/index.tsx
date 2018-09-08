import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ExamplesList from "./ExamplesList";

const App = () => (
  <main
    style={{
      backgroundImage: "url(https://www.getpapercss.com/img/geometry2.png)",
      height: "100%",
    }}
  >
    <Router>
      <ExamplesList />
    </Router>
  </main>
);

render(<App />, document.getElementById("root"));
