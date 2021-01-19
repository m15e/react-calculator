import '../App.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const clickHandler = buttonName => {
    setState(state => calculate(state, buttonName));
  };

  const { total, next, operation } = state;

  return (
    <>
      <Display result={{ total, next, operation }} />
      <ButtonPanel clickHandler={clickHandler} />
    </>
  );
};

// old class version

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };

//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler(buttonName) {
//     this.setState(state => calculate(state, buttonName));
//   }

//   render() {
//     const { total, next, operation } = this.state;
//     return (
//       <>
//         <Display result={{ total, next, operation }} />
//         <ButtonPanel clickHandler={this.clickHandler} />
//       </>
//     );
//   }
// }

export default App;
