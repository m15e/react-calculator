import calculate from '../calculate';

test("AC button sets all values to null", () => {
  const calcData = {
    total: '55',
    next: '12',
    operation: '-'
  };

  const res = {
    total: null,
    next:  null,
    operation: null,
  };

  expect(calculate(calcData, 'AC')).toEqual(res);
});

test('+/- flips sign of total and next', () => {
  const calcData = {
    total: '55',
    next: '-12',
    operation: null,
  };

  const res = {
    total: -55,
    next:  12,
    operation: null,
  };

  expect(calculate(calcData, '+/-')).toEqual(res);
});

test('% divides total by 100 if next is falsy', () => {
  const calcData = {
    total: '100',
    next: null,
    operation: null,
  };

  const res = {
    total: '1',
    next:  null,
    operation: null,
  };

  expect(calculate(calcData, '%')).toEqual(res);
});

test('% changes operation to +% if next has a value', () => {
  const calcData = {
    total: '100',
    next: '10',
    operation: '+',
  };

  const res = {
    total: '100',
    next:  '10',
    operation: '+%',
  };

  expect(calculate(calcData, '%')).toEqual(res);
});

test('% changes operation to -% if next has a value', () => {
  const calcData = {
    total: '100',
    next: '10',
    operation: '-',
  };

  const res = {
    total: '100',
    next:  '10',
    operation: '-%',
  };

  expect(calculate(calcData, '%')).toEqual(res);
});

test('= correctly calculates sum', () => {
  const calcData = {
    total: '100',
    next: '10',
    operation: '+',
  };

  const res = {
    total: '110',
    next:  null,
    operation: null,
  };

  expect(calculate(calcData, '=')).toEqual(res);
});

test('= correctly calculates subtraction', () => {
  const calcData = {
    total: '100',
    next: '10',
    operation: '-',
  };

  const res = {
    total: '90',
    next:  null,
    operation: null,
  };

  expect(calculate(calcData, '=')).toEqual(res);
});

test('= correctly calculates multiplication', () => {
  const calcData = {
    total: '100',
    next: '10',
    operation: 'X',
  };

  const res = {
    total: '1000',
    next:  null,
    operation: null,
  };

  expect(calculate(calcData, '=')).toEqual(res);
});

test('= correctly calculates division', () => {
  const calcData = {
    total: '100',
    next: '10',
    operation: '÷',
  };

  const res = {
    total: '10',
    next:  null,
    operation: null,
  };

  expect(calculate(calcData, '=')).toEqual(res);
});

