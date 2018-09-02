import fs from "fs";

declare var __dirname: string;

const moduleAsString = (path: string) => fs.readFileSync(`${__dirname}${path}`);
export const PaperButton = moduleAsString("./PaperButton.tsx");
