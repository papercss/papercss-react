// this can't be .ts file
// https://github.com/parcel-bundler/parcel/issues/1736

import fs from "fs";

export const PaperButton = fs.readFileSync(
  `${__dirname}/PaperButton.tsx`,
  "utf-8"
);

export const PaperInput = fs.readFileSync(
  `${__dirname}/PaperInput.tsx`,
  "utf-8"
);

export const Typography = fs.readFileSync(
  `${__dirname}/Typography.tsx`,
  "utf-8"
);
