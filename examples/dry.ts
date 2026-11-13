// DRY means: do not write the same rule again and again.

// Repeated rule: the discount formula is written twice.
const firstOrderPrice = 1000 - 1000 * 0.1;
const secondOrderPrice = 2000 - 2000 * 0.1;

console.log("DRY - repeated rule:");
console.log(`First order: Rs ${firstOrderPrice}`);
console.log(`Second order: Rs ${secondOrderPrice}`);

// Better: put the rule in one function and reuse it.
function applyDiscount(price: number): number {
  const discountRate = 0.1; // A 10% discount
  return price - price * discountRate;
}

console.log("DRY - reusing one function:");
console.log(`First order: Rs ${applyDiscount(1000)}`);
console.log(`Second order: Rs ${applyDiscount(2000)}`);
