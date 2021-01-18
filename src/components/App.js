import '../App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(buttonName) {
    this.setState(state => calculate(state, buttonName));
    console.log(this.state);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={{ total, next, operation }} />
        <ButtonPanel clickHandler={this.clickHandler} />
      </>
    );
  }
}

export default App;
