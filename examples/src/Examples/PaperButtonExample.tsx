import React from "react";
import { PaperButton } from "react-paper-css";

import AceEditor from "react-ace";
import SourceRender from "react-source-render";

// tslint:disable:no-submodule-imports
import "brace/mode/html";
import "brace/mode/tsx";
import "brace/theme/gruvbox";
// tslint:enable:no-submodule-imports

const imports: Record<string, any> = {
  PaperButton,
  react: React,
};
const importResolver = (path: string) => imports[path];

const initialState = {
  error: null,
  markup: "",
  source: `import React from "react";
const Example = <div>Hello world!</div>;

export default Example
`,
};

type State = typeof initialState;

class Example extends React.Component<{}, State> {
  public handleSourceChange = (source: string) => this.setState({ source });

  public handleRenderError = (error: any) => this.setState({ error });

  public handleRenderSuccess = (error: any, { markup }: { markup: string }) =>
    this.setState({ error, markup });

  public render() {
    const { error, markup, source } = this.state;

    return (
      <>
        <h1>Example</h1>
        <SourceRender
          onError={this.handleRenderError}
          onSuccess={this.handleRenderSuccess}
          resolver={importResolver}
          source={source}
        />
        <AceEditor
          editorProps={{ $blockScrolling: Infinity }}
          highlightActiveLine={false}
          highlightGutterLine={false}
          maxLines={Infinity}
          mode="html"
          name="html-editor"
          readOnly={true}
          showCursor={false}
          showGutter={false}
          showPrintMargin={false}
          tabSize={2}
          theme="gruvbox"
          value={markup}
          width="100%"
        />
        <AceEditor
          editorProps={{ $blockScrolling: Infinity }}
          maxLines={Infinity}
          minLines={10}
          mode="jsx"
          name="jsx-editor"
          onChange={this.handleSourceChange}
          tabSize={2}
          theme="gruvbox"
          value={source}
          width="100%"
        />
        {error}
      </>
    );
  }
}

export default Example;
