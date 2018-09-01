import React from 'react';
import { render } from 'react-dom';

import Examples from './Examples';

const App = () => (
  <div>
    <Examples />
  </div>
);
const root = document.getElementById('root');

if (root) {
  render(<App />, root);
} else {
  throw new Error('We need element with id="root"');
}
