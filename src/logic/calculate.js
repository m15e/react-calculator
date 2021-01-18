import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  const nums = ['.'] + [...Array(10).keys()].map(String);

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    total *= -1;
    if (next) { next *= -1; }
  }

  if (buttonName === '%') {
    if (!next) {
      total = operate(total, 100, '÷');
    }
  }

  if (total && !operation && (buttonName === 'X' || buttonName === '÷' || buttonName === '+' || buttonName === '-')) {
    operation = buttonName;
  }

  if (next && operation && (buttonName === '%')) {
    if (operation.length < 2) {
      operation += buttonName;
    }
  }

  if (buttonName === '=' && next) {
    if (operation.length === 2) {
      next = operate(next, 100, '÷');
      next = operate(total, next, 'X');
      total = operate(total, next, operation[0]);
    } else {
      total = operate(total, next, operation);
    }
    operation = null;
    next = null;
  }

  if (nums.includes(buttonName)) {
    if (total && !operation) {
      total += buttonName;
    }
    if (!total) {
      total = buttonName;
    }
    if (operation) {
      if (!next) {
        next = buttonName;
      } else {
        next += buttonName;
      }
    }
  }
  const state = { total, next, operation };
  return state;
};

export default calculate;
