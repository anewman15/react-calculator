import Big from 'big.js';

const operate = (first, second, operation) => {
  const firstNum = new Big(first);
  const secondNum = new Big(second);

  let result;
  switch (operation) {
    case '%':
      result = (firstNum * 100) / secondNum;
      return result;
    case '/':
      result = firstNum / secondNum;
      return result;
    case 'X':
      result = firstNum * secondNum;
      return result;
    case '+':
      result = firstNum - secondNum;
      return result;
    case '-':
      result = firstNum - secondNum;
      return result;
    default:
      return result;
  }
};

export default operate;