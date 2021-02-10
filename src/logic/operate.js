import Big from 'big.js';

const operate = (first, second, operation) => {
  const firstNum = new Big(first);
  const secondNum = new Big(second);

  let result;
  switch (operation) {
    case '%':
      result = firstNum.times(100).div(secondNum).toNumber();
      return result;
    case '/':
      result = firstNum.div(secondNum).toNumber();
      return result;
    case 'X':
      result = firstNum.times(secondNum).toNumber();
      return result;
    case '+':
      result = firstNum.plus(secondNum).toNumber();
      return result;
    case '-':
      result = firstNum.minus(secondNum).toNumber();
      return result;
    default:
      return result;
  }
};

export default operate;