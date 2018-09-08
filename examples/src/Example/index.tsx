import React from "react";
import { Heading } from "react-paper-css";

import Editors from "./Editors";

type ExampleProps = {
  name: string;
  source: string;
  children: React.ReactNode;
};

const initialState = {
  markupVisible: true,
  sourceVisible: true,
};

type State = typeof initialState;

class Example extends React.PureComponent<ExampleProps, State> {
  public readonly state = initialState;

  public render() {
    const { name, source, children } = this.props;
    const { markupVisible, sourceVisible } = this.state;
    return (
      <section>
        <header style={{ minHeight: "2rem" }}>
          <Heading
            as="h3"
            style={{
              float: "left",
              margin: 0,
            }}
          >
            {name}
          </Heading>
          <section style={{ float: "right" }}>
            <button onClick={this.toggleShowSource}>Playground</button>
            <button onClick={this.toggleShowMarkup}>Show HTML</button>
          </section>
        </header>
        {children}
        <Editors
          initialSource={source}
          showMarkup={markupVisible}
          showSource={sourceVisible}
        />
      </section>
    );
  }

  private toggleShowSource = () => {
    this.setState(({ sourceVisible }) => ({ sourceVisible: !sourceVisible }));
  };

  private toggleShowMarkup = () => {
    this.setState(({ markupVisible }) => ({ markupVisible: !markupVisible }));
  };
}

export default Example;
