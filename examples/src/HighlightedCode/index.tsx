// tslint:disable:no-submodule-imports
import Prism from "prismjs/components/prism-core";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import React from "react";

import { CODE_FONT_SIZE, CODE_LINE_HEIGHT } from "../constants";

import "./prism-tomorrow.scss";

type Props = {
  code: string;
};
class HighlightedCode extends React.PureComponent<Props> {
  public render() {
    return (
      <pre
        style={{
          backgroundColor: "#1D1F21",
          lineHeight: CODE_LINE_HEIGHT,
          overflow: "auto",
          padding: "0.8em",
        }}
      >
        <code
          className="language-typescript"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              this.props.code.trim(),
              Prism.languages.typescript
            ),
          }}
          style={{
            fontFamily: "Inconsolata",
            fontSize: CODE_FONT_SIZE,
            lineHeight: CODE_LINE_HEIGHT,
          }}
        />
      </pre>
    );
  }
}

export default HighlightedCode;
