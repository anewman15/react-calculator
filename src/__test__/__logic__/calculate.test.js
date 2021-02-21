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
});