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

---

Here’s a **README.md template** with the content **unchanged** (only clean Markdown formatting, wording is exactly the same):

---

# Coding Challenge – BMI Comparison Using Objects

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height \*_ 2 = mass / (height _ height). (mass in kg and height in meter)

## Your tasks:

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example:
   `"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"`

## Test Data

Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
