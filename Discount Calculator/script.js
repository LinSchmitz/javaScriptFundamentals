const purchase = 220;

const hasDiscount = purchase >= 100;
const discount = purchase * 0.1;
const total = purchase - discount;

console.log(
  hasDiscount
    ? `The purchase was $${purchase}, the discount is $${discount.toFixed(2)}, total after discount is $${total.toFixed(2)}.`
    : `The purchase was $${purchase}, no discount applied.`,
);
