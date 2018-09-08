# React PaperCSS

React Components for [PaperCss](https://github.com/papercss/papercss)

Install with NPM `npm install --save react-paper-css`

[Demo](https://papercss.github.io/React-Paper-CSS-Page/)

## Docs

### Usage

Just import whichever components you would like to use, like below:

```
import { Button, Badge, PaperLayout, PaperCol, PaperForm, PaperInput, PaperSelect, PaperRadio, PaperCheckbox} from 'react-paper-css';
```

### Developing

Go to examples directory

```
cd examples
```

install and run with npm

```
npm install
npm run dev
```

or with yarn

```
yarn
yarn dev
```

Then click or copy the link in your terminal to go to examples page.

### Passible problems

If you face an error `/papercss-react/examples/src/ExamplesList.tsx:42:32: Cannot resolve dependency 'react-paper-css'`
the working solution is to add this dependency with:
```
yarn add file:../
```
