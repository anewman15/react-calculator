import operate from './operate';

const calculate = (calculatorData, btnName) => {
  const data = { ...calculatorData };
  switch (btnName) {
    case '+/-':
      data.total *= -1;
      data.next *= -1;
      return data;
    case data.operation:
      data.total = operate(data.total, data.next, data.operation);
      return data;
    default:
      return data;
  }
};

export default calculate;