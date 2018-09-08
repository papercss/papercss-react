// this can't be .ts file
// https://github.com/parcel-bundler/parcel/issues/1736

import fs from "fs";

export const PaperButton = fs.readFileSync(
  `${__dirname}/PaperButton/PaperButton.example.tsx`,
  "utf-8"
);

export const PaperInput = fs.readFileSync(
  `${__dirname}/PaperInput/PaperInput.example.tsx`,
  "utf-8"
);

export const PaperTypography = fs.readFileSync(
  `${__dirname}/PaperTypography/PaperTypography.example.tsx`,
  "utf-8"
);

export const Heading = fs.readFileSync(
  `${__dirname}/Heading/Heading.example.tsx`,
  "utf-8"
);

export const PaperBadge = fs.readFileSync(
  `${__dirname}/PaperBadge/PaperBadge.example.tsx`,
  "utf-8"
);
