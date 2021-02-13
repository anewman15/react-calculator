import Big from 'big.js';

const operate = (first, second, operation) => {
  const firstNum = new Big(first);
  const secondNum = new Big(second);

  let calcValue;
  switch (operation) {
    case '%':
      calcValue = firstNum.times(100).div(secondNum).toNumber();
      return calcValue;
    case '/':
      try {
        calcValue = firstNum.div(secondNum).toNumber();
      } catch {
        calcValue = 'Undefined';
      }
      return calcValue;
    case 'X':
      calcValue = firstNum.times(secondNum).toNumber();
      return calcValue;
    case '+':
      calcValue = firstNum.plus(secondNum).toNumber();
      return calcValue;
    case '-':
      calcValue = firstNum.minus(secondNum).toNumber();
      return calcValue;
    default:
      return calcValue;
  }
};

export default operate;