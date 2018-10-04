import { readFileSync } from "fs";
import React from "react";
import { Heading, Typography } from "react-paper-css";

import { H3 } from "../../Headings";
import HighlightedCode from "../../HighlightedCode";
import Sandbox from "../../Sandbox";

const orderedListSource = readFileSync(
  `${__dirname}/OrderedListExample.tsx`,
  "utf-8"
);
const unorderedListSource = readFileSync(
  `${__dirname}/UnorderedListExample.tsx`,
  "utf-8"
);
const mixedListSource = readFileSync(
  `${__dirname}/MixedListExample.tsx`,
  "utf-8"
);

const BadgeDoc = () => (
  <Typography>
    <H3>List</H3>
    <HighlightedCode
      code={`
type ListElement = HTMLUListElement | HTMLOListElement;

type ListProps<T extends ListElement = HTMLUListElement> = (
  | { as?: "ul"; ordered?: false }
  | { as?: "ol"; ordered?: true }) &
  HTMLAttributes<T>;      
`}
    />
    <H3>Ordered Lists</H3>
    <Sandbox source={orderedListSource} sourceVisible={false} />
    <H3>Unorderd Lists</H3>
    <Sandbox source={unorderedListSource} sourceVisible={false} />
    <H3>Mixed Lists</H3>
    <p>Of course you can mix ordered and unordered lists.</p>
    <Sandbox source={mixedListSource} sourceVisible={false} />
  </Typography>
);

export default BadgeDoc;
