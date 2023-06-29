import { test, expect  } from 'vitest'
import validateEmail from '../modules/validateEmail'

test('validates that a string is in a valid email format', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid@email.com')).toBe(true);
});
