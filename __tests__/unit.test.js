// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('isPhoneNumber returns true for valid phone numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for invalid phone numbers', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
  expect(isPhoneNumber('123.456.7890')).toBe(false);
});

// isEmail tests
test('isEmail returns true for valid email addresses', () => {
  expect(isEmail('john@gmail.com')).toBe(true);
  expect(isEmail('nik_y@gmail.com')).toBe(true);
});

test('isEmail returns false for invalid email addresses', () => {
  expect(isEmail('john@gmail')).toBe(false);
  expect(isEmail('nik_y@gmail.')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword returns true for valid strong passwords', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
  expect(isStrongPassword('Password_1')).toBe(true);
});

test('isStrongPassword returns false for invalid or weak passwords', () => {
  expect(isStrongPassword('123')).toBe(false);
  expect(isStrongPassword('')).toBe(false);
});

// isDate tests
test('isDate returns true for valid dates', () => {
  expect(isDate('01/01/2000')).toBe(true);
  expect(isDate('12/31/2023')).toBe(true);
});

test('isDate returns false for invalid dates', () => {
  expect(isDate('001/1/2000')).toBe(false);
  expect(isDate('12/3123')).toBe(false);
});

// isHexColor tests
test('isHexColor returns true for valid hex color codes', () => {
  expect(isHexColor('#fff')).toBe(true);
  expect(isHexColor('#A1B2C3')).toBe(true);
});

test('isHexColor returns false for invalid hex color codes', () => {
  expect(isHexColor('#fffg')).toBe(false);
});

// Additional tests for isPhoneNumber
test('isPhoneNumber returns true for valid phone numbers with different formats', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('isPhoneNumber returns false for phone numbers with invalid characters', () => {
  expect(isPhoneNumber('123-45a-7890')).toBe(false);
  expect(isPhoneNumber('(123)*456*7890')).toBe(false);
});

// Additional tests for isEmail
test('isEmail returns true for valid email addresses with different domains', () => {
  expect(isEmail('john@icarai.io')).toBe(true);
  expect(isEmail('niky@hello.tv')).toBe(true);
});

test('isEmail returns false for email addresses with invalid characters', () => {
  expect(isEmail('john@gmail.com!')).toBe(false);
  expect(isEmail('niky@gmail.com#')).toBe(false);
});

// Additional tests for isStrongPassword
test('isStrongPassword returns false for passwords that are too short or too long', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
  expect(isStrongPassword('Abcdefghijklmnop1')).toBe(false);
});

test('isStrongPassword returns false for passwords without a letter as the first character', () => {
  expect(isStrongPassword('1Abcdefg')).toBe(false);
  expect(isStrongPassword('_Abcdefg')).toBe(false);
});

// Additional tests for isDate
test('isDate returns true for valid dates with leading zeros', () => {
  expect(isDate('01/01/2000')).toBe(true);
  expect(isDate('12/01/2023')).toBe(true);
});

test('isDate returns false for dates with invalid month or day values', () => {
  expect(isDate('-1/5/2000')).toBe(false);
});

// Additional tests for isHexColor
test('isHexColor returns true for valid hex color codes with lowercase letters', () => {
  expect(isHexColor('#abc')).toBe(true);
  expect(isHexColor('#a1b2c3')).toBe(true);
});

test('isHexColor returns false for hex color codes with invalid characters', () => {
  expect(isHexColor('#fgf')).toBe(false);
  expect(isHexColor('#a1b2c!')).toBe(false);
});
