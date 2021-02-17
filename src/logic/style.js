const btnBgColor = (btnName) => {
  const digits = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['/', 'X', '+', '-'];
  const toggle = ['+/-', '%'];
  let btnBgClass;
  if (digits.includes(btnName)) {
    btnBgClass = 'btn-digit';
  }
  if (operators.includes(btnName)) {
    btnBgClass = 'btn-operator';
  }
  if (toggle.includes(btnName)) {
    btnBgClass = 'btn-toggle';
  }
  if (btnName === 'AC') {
    btnBgClass = 'btn-clear';
  }
  if (btnName === '=') {
    btnBgClass = 'btn-equal';
  }
  return btnBgClass;
};

export default btnBgColor;