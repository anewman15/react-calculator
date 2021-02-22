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

  it('returns a value for multiplication when the operator is X', () => {
    const calcValue = operate('18', '4.5', 'X');

    expect(calcValue).toBe(81);
  });

  it('returns a value for addition when the operator is +', () => {
    const calcValue = operate('18', '4.5', '+');

    expect(calcValue).toBe(22.5);
  });

  it('returns a value for subtraction when the operator is -', () => {
    const calcValue = operate('18', '4.5', '-');

    expect(calcValue).toBe(13.5);
  });

  it('returns Undefined when the operator is anything else', () => {
    const calcValue = operate('18', '4.5', 'a');

    expect(calcValue).toBe(undefined);
  });
});