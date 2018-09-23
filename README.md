# React PaperCSS

React Components for [PaperCSS](https://github.com/papercss/papercss)

## Installing

```
npm install --save react-paper-css
```

## Usage

Just import whichever components you would like to use, like below:

```
import {
  Button,
  Badge,
  PaperInput,
  PaperSelect,
  PaperRadio,
  PaperCheckbox
} from 'react-paper-css';
```

## Developing

Let webpack the library

```
npm install // yarn
npm run watch // yarn watch
```

Go to examples directory

```
cd examples
```

install and run with your favorite package manager

```
npm install // yarn
npm run dev // yarn dev
```

Then click or copy the link in your terminal to go to examples page.

## Possible problems

If you clone the repo, try to run examples and face an error similar to `/papercss-react/examples/src/ExamplesList.tsx:42:32: Cannot resolve dependency 'react-paper-css'`
install the library again.

```
npm install ..
yarn add file:../
```
