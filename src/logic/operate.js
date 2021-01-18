import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res;
  const a = new Big(parseFloat(numberOne));
  const b = parseFloat(numberTwo); // Big.js doesn't require second variable to be 'Big' instance

  if (operation === 'X') {
    res = a.times(b);
  } if (operation === '÷') {
    if (b === 0) {
      res = 'Error: Zero division not permitted!';
    } else {
      res = a.div(b);
    }
  } if (operation === '+') {
    res = a.plus(b);
  } if (operation === '-') {
    res = a.minus(b);
  }

  const resultStr = res.toString();

  return resultStr;
};

export default operate;
