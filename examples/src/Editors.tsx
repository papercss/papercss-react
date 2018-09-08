import pretty from "pretty";
import React from "react";
import AceEditor from "react-ace";
import * as PaperCss from "react-paper-css";
import SourceRender from "react-source-render";
import styled from "styled-components";

// tslint:disable:no-submodule-imports
import "brace/ext/language_tools";
import "brace/mode/html";
import "brace/mode/tsx";
import "brace/theme/tomorrow_night";
import babylon from "prettier/parser-babylon";
import prettier from "prettier/standalone";
// tslint:enable:no-submodule-imports

import { CODE_LINE_HEIGHT } from "./constants";

const prettierPlugins = [babylon];

function formatSourceCode(code: string) {
  return code
    ? prettier.format(code, {
        parser: "babylon",
        plugins: prettierPlugins,
      })
    : "";
}

function formatHTML(markup: string) {
  return pretty(markup.replace(/(.)<(\w)/g, "$1\n<$2"), { ocd: true });
}

const imports: Record<string, any> = {
  react: React,
  "react-paper-css": PaperCss,
};
const importResolver = (path: string) => imports[path];

export type EditorsProps = {
  initialSource: string;
};

const makeInitialState = (initialSource: string) => ({
  error: null as Error | null,
  markup: "",
  source: initialSource,
});

type State = ReturnType<typeof makeInitialState>;

const Editor = React.forwardRef(({ ...rest }: Record<string, any>, ref) => (
  <AceEditor
    ref={ref}
    maxLines={Infinity}
    fontSize={14}
    tabSize={2}
    theme="tomorrow_night"
    style={{
      fontFamily: "Inconsolata",
      lineHeight: CODE_LINE_HEIGHT,
    }}
    width="100%"
    {...rest}
  />
));

const ComponentContainer = styled.article`
  padding: 20px;
`;

class Editors extends React.Component<EditorsProps, State> {
  public readonly state = makeInitialState(this.props.initialSource);
  private editor = React.createRef();
  public render() {
    const { error, markup, source } = this.state;
    return (
      <article>
        <PaperCss.Heading as="h4">Try it</PaperCss.Heading>
        <ComponentContainer>
          <SourceRender
            onError={this.handleRenderError}
            onSuccess={this.handleRenderSuccess}
            resolver={importResolver}
            source={source}
            babelConfig={{}}
          />
        </ComponentContainer>
        <Editor
          ref={this.editor}
          editorProps={{ $blockScrolling: Infinity }}
          enableLiveAutocompletion={true}
          enableBasicAutocompletion={true}
          minLines={10}
          mode="tsx"
          name="tsx-editor"
          onChange={this.handleSourceChange}
          value={source}
        />
        <PaperCss.Heading as="h4">HTML</PaperCss.Heading>
        <Editor
          editorProps={{ $blockScrolling: Infinity }}
          highlightActiveLine={false}
          highlightGutterLine={false}
          mode="html"
          name="html-editor"
          readOnly={true}
          showCursor={false}
          showGutter={false}
          showPrintMargin={false}
          value={markup}
        />
        {error && (
          <div>
            <pre>{error.toString()}</pre>
          </div>
        )}
      </article>
    );
  }

  private handleRenderSuccess = (
    error: any,
    { markup }: { markup: string }
  ) => {
    this.setState({ markup: formatHTML(markup) });
    this.setError(error);
  };

  private handleSourceChange = (source: string) => this.setState({ source });

  private setError(error: Error) {
    if (this.state.error === error) {
      return;
    }
    this.setState({ error });
    if (this.editor && this.editor.current) {
      const session = (this.editor.current as any).editor.getSession();
      if (error) {
        const { message } = error;
        const [_, row, column] = Array.from(
          message.match(/\((\d+):(\d+)\)\n/) || []
        );
        session.setAnnotations([
          {
            column,
            row: Number(row) - 1,
            text: error.message,
            type: "error",
          },
        ]);
      } else {
        session.setAnnotations([]);
      }
    }
  }

  private handleRenderError = (error: Error) => {
    this.setError(error);
  };
}

export default Editors;
