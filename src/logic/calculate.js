// import operate from './operate';

const calculate = (calculatorData, btnName) => {
  const data = { ...calculatorData };
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['%', '/', 'X', '+', '-'];

  let operator;
  let digit;
  if (digits.includes(btnName)) {
    digit = btnName;
  }

  if (operators.includes(btnName)) {
    operator = btnName;
  }

  switch (btnName) {
    case 'AC':
      data.total = 0;
      data.next = 0;
      data.operation = null;
      data.display = data.total;
      return data;
    case digit:
      data.total = data.total ? data.total + digit : digit;
      data.display = data.total;
      if (data.total && data.operation) {
        data.next = data.next ? data.next + digit : digit;
        data.display = data.next;
      }
      return data;
    case '.':
      data.total = data.total && data.total.includes('.') ? `${data.total}` : `${data.total}${'.'}`;
      data.display = data.total;
      if (data.total && data.operation) {
        data.next = data.next && data.next.includes('.') ? `${data.next}` : `${data.next}${'.'}`;
        data.display = data.next;
      }
      return data;
    case operator:
      if (!data.operation) {
        data.operation = data.total ? operator : null;
        data.next = null;
        data.display = data.operation;
      }
      return data;
    default:
      return data;
  }
};

export default calculate;