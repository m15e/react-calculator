import '../../App.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../../logic/calculate';
import Header from '../header/Header';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = buttonName => {
    setState(state => calculate(state, buttonName));
  };

  const { total, next, operation } = state;

  return (
    <>
      <Header />
      <div className="app-container">
        <Display result={{ total, next, operation }} />
        <ButtonPanel clickHandler={clickHandler} />
      </div>
    </>
  );
};

export default App;
