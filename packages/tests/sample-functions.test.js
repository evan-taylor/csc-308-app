const myFunctions = require('./sample-functions.js');

// Tests for div() function
test('div -- basic division', () => {
  expect(myFunctions.div(10, 2)).toBe(5);
});

test('div -- division with decimals', () => {
  expect(myFunctions.div(7, 2)).toBe(3.5);
});

test('div -- division by 1', () => {
  expect(myFunctions.div(42, 1)).toBe(42);
});

test('div -- negative numbers', () => {
  expect(myFunctions.div(-10, 2)).toBe(-5);
});

test('div -- two negative numbers', () => {
  expect(myFunctions.div(-10, -2)).toBe(5);
});

test('div -- zero divided by number', () => {
  expect(myFunctions.div(0, 5)).toBe(0);
});

test('div -- division by zero returns Infinity', () => {
  expect(myFunctions.div(10, 0)).toBe(Infinity);
});

// Tests for containsNumbers() function
test('containsNumbers -- string with numbers', () => {
  expect(myFunctions.containsNumbers('hello123')).toBe(true);
});

test('containsNumbers -- string without numbers', () => {
  expect(myFunctions.containsNumbers('hello')).toBe(false);
});

test('containsNumbers -- only numbers', () => {
  expect(myFunctions.containsNumbers('12345')).toBe(true);
});

test('containsNumbers -- number at beginning', () => {
  expect(myFunctions.containsNumbers('1hello')).toBe(true);
});

test('containsNumbers -- number at end', () => {
  expect(myFunctions.containsNumbers('hello1')).toBe(true);
});

test('containsNumbers -- empty string', () => {
  expect(myFunctions.containsNumbers('')).toBe(false);
});

test('containsNumbers -- string with spaces', () => {
  expect(myFunctions.containsNumbers('hello world')).toBe(false);
});

test('containsNumbers -- string with special characters', () => {
  expect(myFunctions.containsNumbers('hello!@#$%')).toBe(false);
});
