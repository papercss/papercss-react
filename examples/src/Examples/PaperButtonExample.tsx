import React from "react";
import * as PaperCss from "react-paper-css";
import styled from "styled-components";

import AceEditor from "react-ace";
import SourceRender from "react-source-render";

// tslint:disable:no-submodule-imports
import "brace/ext/language_tools";
import "brace/mode/html";
import "brace/mode/tsx";
import "brace/theme/gruvbox";
// tslint:enable:no-submodule-imports

const imports: Record<string, any> = {
  react: React,
  "react-paper-css": PaperCss,
};
const importResolver = (path: string) => imports[path];

const initialState = {
  error: null as Error | null,
  markup: "",
  source: `import React from "react";
import { PaperButton } from "react-paper-css";
const Example = <PaperButton>Click me!</PaperButton>;

export default Example;
`,
};

type State = typeof initialState;

const Editor = React.forwardRef(({ ...rest }: Record<string, any>, ref) => (
  <AceEditor
    ref={ref}
    maxLines={Infinity}
    fontSize={14}
    tabSize={2}
    theme="gruvbox"
    width="100%"
    {...rest}
  />
));

const ComponentContainer = styled.article`
  padding: 20px;
`;

class Example extends React.Component<{}, State> {
  public readonly state = initialState;

  private editor = React.createRef();

  public render() {
    const { error, markup, source } = this.state;

    return (
      <>
        <h1>PaperButton</h1>
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
        <h2>HTML</h2>
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
      </>
    );
  }

  private handleRenderSuccess = (
    error: any,
    { markup }: { markup: string }
  ) => {
    this.setState({ markup });
    this.setError(error);
  };

  private handleSourceChange = (source: string) => this.setState({ source });

  private setError(error: Error) {
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

export default Example;
