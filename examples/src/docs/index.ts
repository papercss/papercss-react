import Badge from "./Badge";
import * as examplesBarrel from "./examples";
import PaperInput from "./PaperInput";
import PaperTypography from "./PaperTypography";

const examples = { ...examplesBarrel };
delete examples.__esModule;

const documentationComponents: Record<string, () => JSX.Element> = {
  Badge,
  PaperInput,
  PaperTypography,
};

export { examples, documentationComponents };
