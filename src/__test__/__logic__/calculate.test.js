import calculate from '../../logic/calculate';

const calculatorData = {
  display: null,
  total: null,
  next: null,
  operation: null,
  operated: false,
};

describe('Calculate function', () => {
  it('returns a display of zero when btnName is AC', () => {
    const calcValue = calculate(calculatorData, 'AC');
    expect(calcValue.display).toBe(0);
  });

  it('returns a display of negative of the total when btnName is +/-', () => {
    calculatorData.total = 25;
    const calcValue = calculate(calculatorData, '+/-');
    expect(calcValue.display).toBe('-25');
  });

  it('returns a display of percentage of total when btnName is %', () => {
    calculatorData.total = 250;
    const calcValue = calculate(calculatorData, '%');
    expect(calcValue.display).toBe('2.5');
  });

  it('if decimal not present, returns a display with decimal appended to the total when btnName is .', () => {
    calculatorData.total = '250';
    const calcValue = calculate(calculatorData, '.');
    expect(calcValue.display).toBe('250.');
  });

  it('if decimal already exists returns a display with no decimal appended to the total when btnName is .', () => {
    calculatorData.total = '250';
    const calcValue = calculate(calculatorData, '.');
    expect(calcValue.display).toBe('250.');
  });

  it('returns a display with a digit appended to the total when btnName is a digit', () => {
    calculatorData.total = '250';
    const calcValue = calculate(calculatorData, '5');
    expect(calcValue.display).toBe('2505');
  });

  it('returns a display with a operator appended when btnName is a operator', () => {
    calculatorData.total = '250';
    const calcValue = calculate(calculatorData, '+');
    expect(calcValue.display).toBe('250 +');
  });

  it('returns a display with a the value of the operate function when btnName is a =', () => {
    calculatorData.total = '250';
    calculatorData.next = '10';
    calculatorData.operation = '/';
    const calcValue = calculate(calculatorData, '=');
    expect(calcValue.display).toBe('25');
  });
});