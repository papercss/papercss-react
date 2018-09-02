// this can't be .ts file
// https://github.com/parcel-bundler/parcel/issues/1736

import fs from "fs";

export const PaperButton = fs.readFileSync(
  `${__dirname}/PaperButton.tsx`,
  "utf-8"
);
