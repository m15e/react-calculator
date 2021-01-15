import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res;
  if (operation === 'X') {
    res = Big(numberOne) * Big(numberTwo);
  } if (operation === '÷') {
    res = Big(numberOne) / Big(numberTwo);
  } if (operation === '+') {
    res = Big(numberOne) + Big(numberTwo);
  } if (operation === '-') {
    res = Big(numberOne) - Big(numberTwo);
  }

  return res;
};

export default operate;
