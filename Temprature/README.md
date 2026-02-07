# 🧩 JavaScript Practice Challenge – Beginner

## 📌 Challenge Title

**Smart Home Thermometer**

---

## 🧠 Problem Description

We work for a company building a **smart home thermometer**.

Your task is to calculate the **temperature amplitude** for a given day.

> **Temperature amplitude** = difference between the **highest** and **lowest** temperature.

⚠️ Important:
Sometimes the temperature sensor fails and returns `'error'` instead of a number.
These values **must be ignored** during calculation.

---

## 📥 Given Data

```js
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
```

---

## 🧩 Your Tasks

### 1️⃣ Understand the problem

- What does _temperature amplitude_ mean?
- How do you find the **maximum** and **minimum** values?
- What should you do with invalid sensor data like `'error'`?

---

### 2️⃣ Break the problem into steps

- Ignore non-numeric values
- Find the highest temperature
- Find the lowest temperature
- Subtract the minimum from the maximum
- Return the result

---

## 🛠 Requirements

- Use **JavaScript**
- Do **not** use built-in helpers like `Math.max(...array)`
- Solve the problem using basic logic and loops
- Handle invalid values safely

---

## ✅ Expected Output

```js
Amplitude: 23;
```

---

## 💡 Hints

- Use `typeof value === 'number'` to filter valid temperatures
- Initialize `max` and `min` correctly before looping
- Think about what happens if the first value is `'error'`

---

## 🧪 Bonus Challenge (Optional)

- Extend the function to accept **two arrays** of temperatures
- Merge them and calculate the amplitude from both days

---

## 📁 Project Structure (Example)

```
/smart-home-thermometer
│
├── index.js
├── README.md
└── notes.md (optional)
```

---

## 🚀 Goal

Practice:

- Problem decomposition
- Defensive programming
- Working with arrays
- Real-world JavaScript thinking
