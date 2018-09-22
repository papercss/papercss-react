import pretty from "pretty";
import React from "react";
import * as PaperCss from "react-paper-css";
import SourceRender from "react-source-render";

// tslint:disable:no-submodule-imports
import babylon from "prettier/parser-babylon";
import prettier from "prettier/standalone";
// tslint:enable:no-submodule-imports

import { H4 } from "../Headings";

import Editor from "./Editor";

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
  showSource: boolean;
  showMarkup: boolean;
};

const makeInitialState = (initialSource: string) => ({
  error: null as Error | null,
  markup: "",
  source: initialSource,
});

type State = ReturnType<typeof makeInitialState>;

class Editors extends React.Component<EditorsProps, State> {
  public readonly state = makeInitialState(this.props.initialSource);
  private editor = React.createRef();
  public render() {
    const { error, markup, source } = this.state;
    const { showSource, showMarkup } = this.props;

    return (
      <article>
        <PaperCss.Paper
          style={{
            overflow: "scroll",
          }}
        >
          <SourceRender
            onError={this.handleRenderError}
            onSuccess={this.handleRenderSuccess}
            resolver={importResolver}
            source={source}
            babelConfig={{}}
          />
        </PaperCss.Paper>
        {showSource && (
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
        )}
        {showMarkup && (
          <>
            <H4>HTML</H4>
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
          </>
        )}
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
