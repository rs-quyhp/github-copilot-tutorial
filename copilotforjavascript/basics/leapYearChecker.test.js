const { isLeapYear } = require('./leapYearChecker');

test('leap year checker', () => {
  expect(isLeapYear(2020)).toBe(true);
  expect(isLeapYear(2021)).toBe(false);
  expect(isLeapYear(1900)).toBe(false);
  expect(isLeapYear(2000)).toBe(true);
});
