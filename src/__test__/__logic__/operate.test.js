import operate from '../../logic/operate';

describe('Operate function', () => {
  it('returns a number when a number is divided by another number', () => {
    const calcValue = operate('18', '4.5', '/');

    expect(calcValue).toBe(4);
  });

  it('returns Undefined when a number is divided by another number', () => {
    const calcValue = operate('18', '0', '/');

    expect(calcValue).toBe('Undefined');
  });
});