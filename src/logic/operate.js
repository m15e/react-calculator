import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {
  if (operation == "X") {
    return Big(numberOne) * Big(numberTwo)
  } else if (operation == "÷") {
    return Big(numberOne) / Big(numberTwo)
  } else if (operation == "+") {
    return Big(numberOne) + Big(numberTwo)
  } else if (operation == "-") {
    return Big(numberOne) - Big(numberTwo)
  }
};

export default operate;