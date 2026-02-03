let dailyRate;
const carType = "economy";
let rentalDays = 5;

if (carType === "economy") dailyRate = 50;
else if (carType === "suv") dailyRate = 100;
else if (carType === "luxury") dailyRate = 200;
else {
  console.log("Invalid car type");
  dailyRate = 0;
}

// Calculate discount
let discount = rentalDays >= 7 ? 0.1 : rentalDays >= 3 ? 0.05 : 0;

// Total cost
let totalCost = dailyRate * rentalDays * (1 - discount);

console.log(
  `You rented a ${carType} for ${rentalDays} days. Discount applied: ${
    discount * 100
  }%. Total cost: $${totalCost.toFixed(2)}.`,
);
