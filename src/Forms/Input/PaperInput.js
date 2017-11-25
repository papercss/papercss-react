import React from 'react';
import css from './index.css';

class PaperInput extends React.Component {
  render() {
    let theInput;

    if (this.props.label) {
      theInput = (
        <div className={'form-group'}>
          <label className={this.props.inputSize} htmlFor={this.props.inputID}>{this.props.label}</label>
          <input className={this.props.inputSize} placeholder={this.props.placeholder} id={this.props.inputID} disabled={this.props.disabled} />
        </div>
      );
    }
    else {
      theInput = (
        <div className={'form-group'}>
          <input className={this.props.inputSize} placeholder={this.props.placeholder} id={this.props.inputID} disabled={this.props.disabled} />
        </div>
      );
    }

    return theInput;
  }
}

export default PaperInput;
