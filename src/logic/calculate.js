const calculate = (calculatorData, btnName) => {
  const data = { ...calculatorData };
  switch (btnName) {
    case '+/-':
      data.total *= -1;
      data.next *= -1;
      return data;
    case '%':
      data.total *= 100;
      data.next *= 100;
      return data;
    default:
      return data;
  }
};

export default calculate;