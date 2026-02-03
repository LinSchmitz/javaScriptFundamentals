# 🧩 Challenge: Tip Calculator

## 📌 Scenario

You went to a restaurant with friends.
You want to **calculate the tip** based on the bill amount:

- If the bill is **between $50 and $300**, tip **15%**
- Otherwise, tip **20%**

Your task is to calculate:

1. The tip amount
2. The total bill (bill + tip)
3. Log a **readable sentence**

---

## 📊 Given Data

```js
const bill = 275; // You can test with other values too
```

---

## ✅ Tasks

1. Use **`const`** for the bill and tip calculation
2. Create a **boolean variable** for “is standard tip” if needed
3. Calculate the **tip**
4. Calculate the **total bill**
5. Log a **sentence** like:

```
The bill was $275, the tip was $41.25, and the total value is $316.25
```

---

## 🛠️ Rules & Constraints

- ❌ Do not use `var`
- ✅ Use arithmetic operators (`+`, `*`)
- ✅ Use comparison operators (`>=`, `<=`)
- ✅ Use **ternary operator** for tip calculation (optional but recommended)
- ✅ Use template literals for the output

---

## 🧪 Bonus (optional)

- Round the tip and total to **two decimals** using `.toFixed(2)`
- Test with multiple bills: 30, 275, 430
