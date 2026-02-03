# 🧩 Coding Challenge #1 – BMI Comparison

## 📌 Scenario

Mark and John are trying to compare their **BMI (Body Mass Index)**.

BMI is calculated using the formula:

```
BMI = mass / (height * height)
```

- `mass` is in kilograms (kg)
- `height` is in meters (m)

---

## ✅ Your Tasks

1. Store Mark's and John's **mass** and **height** in variables.
2. Calculate both their **BMIs** using the formula (you can implement both versions if you like).
3. Create a **Boolean variable** `markHigherBMI` containing information about whether Mark has a **higher BMI** than John.
4. Log a **readable sentence** to the console describing the result.

---

## 📊 Test Data

**Data 1:**

- Mark: 78 kg, 1.69 m
- John: 92 kg, 1.95 m

**Data 2:**

- Mark: 95 kg, 1.88 m
- John: 85 kg, 1.76 m

---

## 🛠️ Guidelines

- Use **`const`** for values that do not change.
- Use **`let`** only if a value changes during calculations.
- Use **template literals** for readable console output.
- Optional: round BMI to **1 decimal place** using `.toFixed(1)`
- Boolean variable `markHigherBMI` should be assigned using **comparison operators** (`>`, `>=`).

---

## 📤 Example Output

```
Mark's BMI (27.3) is higher than John's BMI (24.2)
```

or

```
John's BMI (27.4) is higher than Mark's BMI (26.8)
```

---

## 💡 Bonus

- Implement a **function** to calculate BMI for any person.
- Handle **both test datasets** in the same script.

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
   is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
   BMI (28.3) is higher than John's (23.9)!"
   Hint: Use an if/else statement 😉
