function calculateTotal(items, discountCode) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (discountCode === "SAVE10") {
    return subtotal * 0.9;
  }
  return subtotal;
}

module.exports = { calculateTotal };