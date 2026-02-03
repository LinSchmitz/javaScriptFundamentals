# 🧩 Coding Challenge #4 – Car Rental Cost Calculator

## 📌 Scenario

You run a **car rental service**.

- Customers can rent a car for a certain number of days.
- The **daily rate** depends on the type of car:
  - Economy: $50/day
  - SUV: $100/day
  - Luxury: $200/day

- If the customer rents the car for **7 days or more**, they get a **10% discount**.
- If the rental is **3–6 days**, they get a **5% discount**.
- Otherwise, no discount.

---

## 🔹 Your Tasks

1. Store **car type** as a string: `"economy"`, `"suv"`, or `"luxury"`
2. Store **number of rental days** as a number (or string that needs conversion)
3. Calculate the **total cost** before discount.
4. Apply the **correct discount** using **if/else** or **ternary operators**.
5. Log a **readable message** using **template literals**, e.g.:

```text
"You rented an SUV for 5 days. Discount applied: 5%. Total cost: $475."
```

---

## 🔹 Bonus Tasks

- Handle **invalid car types** (e.g., `"bike"`) → log `"Invalid car type"`.
- Convert **string input** for number of days to number using `Number()`
- Round the total cost to **2 decimals** using `.toFixed(2)`
- Add a **Boolean** variable `longRental` that is `true` if rental is ≥7 days

---

## 🔹 Sample Test Data

| Car Type | Days | Expected Discount | Example Output                                                               |
| -------- | ---- | ----------------- | ---------------------------------------------------------------------------- |
| economy  | 2    | 0%                | "You rented an economy for 2 days. Discount applied: 0%. Total cost: $100."  |
| SUV      | 5    | 5%                | "You rented an SUV for 5 days. Discount applied: 5%. Total cost: $475."      |
| luxury   | 10   | 10%               | "You rented a luxury for 10 days. Discount applied: 10%. Total cost: $1800." |

---

💡 **Hints**

```js
// Determine daily rate
let dailyRate;
if (carType === "economy") dailyRate = 50;
else if (carType === "suv") dailyRate = 100;
else if (carType === "luxury") dailyRate = 200;
else dailyRate = 0;

// Calculate discount
let discount = rentalDays >= 7 ? 0.1 : rentalDays >= 3 ? 0.05 : 0;

// Total cost
let totalCost = dailyRate * rentalDays * (1 - discount);
```
