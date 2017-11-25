import React from 'react';
import css from './index.css';

class PaperCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChecks: []
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentWillMount() {
    let preChecked = [];

    if (this.props.checked) {
      preChecked.push(this.props.checked);
    }

    this.setState({selectedChecks: preChecked});
  }

  boxIsChecked(e) {
    console.log('e is ', e);
    if (this.state.selectedChecks.indexOf(e) > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  handleOptionChange(e) {
    let component = this;
    // let selectedChecks = this.state.selectedChecks;
    //
    // if (selectedChecks.indexOf(e) > 0) {
    //   let index = selectedChecks.indexOf(e);
    //   selectedChecks.splice(index, 1);
    // }
    // else {
    //   selectedChecks.push(e);
    // }
    //
    // this.setState({selectedChecks: selectedChecks});

    if (component.props.callback) {
      return component.props.callback(e);
    }
  }

  render() {
    const children = this.props.children;

    return (
      <fieldset className={'form-group'}>
        {React.Children.map(children, (child, i) => {
          return (
            <label htmlFor={child.props.inputID} className={'paper-check'}>
              <input type='checkbox' id={child.props.inputID} value={child.props.val} checked={child.props.checked || this.boxIsChecked(child.props.val) ? true : false} onChange={this.handleOptionChange(child.props.val)} />
              <span>{child.props.label} check ? = {child.props.checked} or {child.checked}</span>
            </label>
          )
        })}
      </fieldset>
    );
  }
}

export default PaperCheckbox;
