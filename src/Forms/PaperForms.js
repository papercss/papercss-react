import React from 'react';
import css from './index.css';

class PaperForms extends React.Component {
  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
}

export default PaperForms;
