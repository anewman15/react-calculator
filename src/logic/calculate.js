// import operate from './operate';

const calculate = (calculatorData, btnName) => {
  const data = { ...calculatorData };
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // const operators = ['%', '/', 'X', '+', '-'];

  // let operator;
  let digit;
  if (digits.includes(btnName)) {
    digit = btnName;
  }

  // if (operators.includes(btnName)) {
  //   operator = btnName;
  // }

  switch (btnName) {
    case 'AC':
      data.total = 0;
      data.next = 0;
      data.operation = null;
      return data;
    case '+/-':
      data.total *= -1;
      data.next *= -1;
      data.operation = null;
      return data;
    case digit:
      data.total = data.total ? data.total + digit : digit;
      if (data.total && data.operation) {
        data.next = data.next ? data.next + digit : digit;
      }
      return data;
    case '.':
      data.total = data.total && data.total.includes('.') ? `${data.total}` : `${data.total}${'.'}`;
      if (data.total && data.operation) {
        data.next = data.next && data.next.includes('.') ? `${data.next}` : `${data.next}${'.'}`;
      }
      return data;
    // case operator:
    //   data.operation = operator;
    //   data.next = null;
    //   return data;
    default:
      return data;
  }
};

export default calculate;