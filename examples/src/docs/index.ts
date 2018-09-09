import Badge from "./Badge";
import Button from "./Button";
import * as examplesBarrel from "./examples";
import PaperInput from "./PaperInput";
import Typography from "./Typography";

const examples = { ...examplesBarrel };
delete examples.__esModule;

const documentationComponents: Record<string, () => JSX.Element> = {
  Button,
  Badge,
  PaperInput,
  Typography,
};

export { examples, documentationComponents };
