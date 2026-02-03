// const bill = 275; // You can test with other values too
// let tip;

// if (bill >= 50 && bill <= 300) tip = bill * 0.15;
// else tip = bill * 0.2;

// console.log(
//   `The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value is $${(bill + tip).toFixed(2)}`,
// );

//cleaner version

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value is $${(bill + tip).toFixed(2)}`,
);
