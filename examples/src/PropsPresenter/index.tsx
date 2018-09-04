// tslint:disable:no-submodule-imports
import Prism from "prismjs/components/prism-core";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import React from "react";

import { CODE_LINE_HEIGHT } from "../constants";

import "./prism-tomorrow.scss";

type Props = {
  code: string;
};
class PropsPresenter extends React.PureComponent<Props> {
  public render() {
    return (
      <pre
        style={{
          backgroundColor: "#1D1F21",
          lineHeight: CODE_LINE_HEIGHT,
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
            fontSize: 14,
            lineHeight: CODE_LINE_HEIGHT,
          }}
        />
      </pre>
    );
  }
}

export default PropsPresenter;
