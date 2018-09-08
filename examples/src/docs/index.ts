import * as examplesBarrel from "./examples";
import PaperBadge from "./PaperBadge";
import PaperInput from "./PaperInput";
import PaperTypography from "./PaperTypography";

const examples = { ...examplesBarrel };
delete examples.__esModule;

const documentationComponents: Record<string, () => JSX.Element> = {
  PaperBadge,
  PaperInput,
  PaperTypography,
};

export { examples, documentationComponents };
