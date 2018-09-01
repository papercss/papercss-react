import React from 'react';
import { render } from 'react-dom';

import { PaperButton } from 'react-paper-css';

const App = () => (
  <div>
    Hello!
    <PaperButton />
  </div>
);
const root = document.getElementById('root');

if (root) {
  render(<App />, root);
} else {
  throw new Error('We need element with id="root"');
}
