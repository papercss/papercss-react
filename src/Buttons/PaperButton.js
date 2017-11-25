import React from 'react';
import css from './index.css';

class PaperButton extends React.Component {
  render() {
    return (
      <button className={this.props.buttonType}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default PaperButton;
