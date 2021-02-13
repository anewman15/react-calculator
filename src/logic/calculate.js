import operate from './operate';

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
      data.operated = false;
      return data;
    case '+/-':
      if (!data.operation && data.total) {
        data.total = (parseFloat(data.total) * (-1)).toString();
        data.display = data.total;
      }
      if (data.operation && data.next) {
        data.next = (parseFloat(data.next) * (-1)).toString();
        data.display = data.next;
      }
      return data;
    case digit:
      if (!data.operation && data.operated === false) {
        data.total = data.total ? data.total + digit : digit;
        data.display = data.total;
      }
      if (data.total && data.operation) {
        data.next = data.next ? data.next + digit : digit;
        data.display = data.next;
      }
      return data;
    case '.':
      if (data.total && data.operated === false) {
        data.total = data.total.includes('.') ? `${data.total}` : `${data.total}${'.'}`;
      } else {
        data.total = '0.';
      }
      data.display = data.total;
      if (data.total && data.operation) {
        data.next = data.next && data.next.includes('.') ? `${data.next}` : `${data.next}${'.'}`;
        data.display = data.next;
      }
      return data;
    case operator:
      data.operation = data.total ? operator : null;
      data.next = null;
      data.display = `${data.total} ${data.operation}`;
      return data;
    case '=':
      if (data.total && data.operation && data.next) {
        const operatedValue = operate(data.total, data.next, data.operation).toString();
        data.total = operatedValue;
        data.display = data.total;
        data.next = null;
        data.operation = null;
        data.operated = true;
      }
      return data;
    default:
      return data;
  }
};

export default calculate;