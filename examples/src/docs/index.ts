import * as examplesBarrel from "./examples";
import PaperInput from "./PaperInput";

const examples = { ...examplesBarrel };
delete examples.__esModule;

const documentationComponents: Record<string, () => JSX.Element> = {
  PaperInput,
};

export { examples, documentationComponents };
