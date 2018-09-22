import React from "react";
import AceEditor from "react-ace";

// tslint:disable:no-submodule-imports
import "brace/ext/language_tools";
import "brace/mode/html";
import "brace/mode/tsx";
import "brace/theme/tomorrow_night";
// tslint:enable:no-submodule-imports

import { CODE_FONT_SIZE, CODE_LINE_HEIGHT } from "../constants";

const Editor = React.forwardRef(({ ...rest }: Record<string, any>, ref) => (
  <AceEditor
    ref={ref}
    maxLines={Infinity}
    fontSize={CODE_FONT_SIZE}
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

export default Editor;
