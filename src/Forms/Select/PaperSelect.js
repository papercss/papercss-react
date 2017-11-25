import React from 'react';
import css from './index.css';

class PaperSelect extends React.Component {
  render() {
    let theInput;

    if (this.props.label) {
      theInput = (
        <div className={'form-group'}>
          <label className={this.props.inputSize} htmlFor={this.props.inputID}>{this.props.label}</label>
          <select>
            {this.props.children}
          </select>
        </div>
      );
    }
    else {
      theInput = (
        <div className={'form-group'}>
          <select>
            {this.props.children}
          </select>
        </div>
      );
    }

    return theInput;
  }
}

export default PaperSelect;
