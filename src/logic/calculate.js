import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData

  if (buttonName === "AC") {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === "+/-") {
    total *= -1
    if (next) { next *= -1 }
  }

  if (buttonName === '%') {
    if (!next) {
      total = operate(total, 100, '÷')
    }
  }

  if (!operation && (buttonName === 'X' || buttonName === '÷' || buttonName === '+' || buttonName === '-')) {
    operation = buttonName
  }

  if (buttonName === '=' && next) {
    total = operate(total, next, operation)
  }

  return calculatorData
};

export default calculate;