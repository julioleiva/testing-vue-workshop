import { test, expect, describe  } from 'vitest'
import {calculateCartTotal, filterProductsByPrice} from '../modules/productHelpers'

describe('Set product utils', () => {
    test('filters products that cost less than a given price', () => {
        const products = [
          { name: 'Apple', price: 1.00 },
          { name: 'Orange', price: 0.50 },
          { name: 'Banana', price: 0.25 },
        ];
        const filtered = filterProductsByPrice(products, 0.75);
        expect(filtered).toEqual([
          { name: 'Orange', price: 0.50 },
          { name: 'Banana', price: 0.25 },
        ]);
        expect(() => filterProductsByPrice(products, 'one hundred')).toThrow(TypeError);
      });

      test('calculates the total price of a shopping cart', () => {
        const cart = [
          { item: 'Apple', price: 1.00, quantity: 3 },
          { item: 'Orange', price: 0.50, quantity: 5 },
        ];
        expect(calculateCartTotal(cart)).toBe(5.50);
      });

})