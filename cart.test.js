const { calculateTotal } = require('./cart');

test('calculates cart total without discount', () => {
  const items = [{ price: 100, quantity: 2 }, { price: 50, quantity: 1 }];
  expect(calculateTotal(items)).toBe(250);
});

test('applies 10% discount when code SAVE10 is provided', () => {
  const items = [{ price: 100, quantity: 1 }];
  expect(calculateTotal(items, 'SAVE10')).toBe(90);
});