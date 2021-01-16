import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const dataUpdate = { ...calculatorData };

  if (buttonName === 'AC') {
    dataUpdate.total = null;
    dataUpdate.next = null;
    dataUpdate.operation = null;
  }

  if (buttonName === '+/-') {
    dataUpdate.total *= -1;
    if (dataUpdate.next) { dataUpdate.next *= -1; }
  }

  if (buttonName === '%') {
    if (!dataUpdate.next) {
      dataUpdate.total = operate(dataUpdate.total, 100, '÷');
    }
  }

  if (!dataUpdate.operation && (buttonName === 'X' || buttonName === '÷' || buttonName === '+' || buttonName === '-')) {
    dataUpdate.operation = buttonName;
  }

  if (buttonName === '=' && dataUpdate.next) {
    dataUpdate.total = operate(dataUpdate.total, dataUpdate.next, dataUpdate.operation);
  }

  console.log(dataUpdate);

  return dataUpdate;
};

export default calculate;
