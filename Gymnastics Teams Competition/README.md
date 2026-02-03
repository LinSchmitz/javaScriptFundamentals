# 🏆 Coding Challenge #3 – Gymnastics Teams Competition

## 📌 Scenario

There are two gymnastics teams: **Dolphins** and **Koalas**.

They compete against each other **3 times**. The **team with the highest average score wins a trophy**.

---

## ✅ Your Tasks

1. **Calculate the average score** for each team using the test data.
2. **Compare the teams' average scores** to determine the winner, and log it to the console.
3. **Handle a draw** — if both teams have the **same average score**, print a draw message.

---

## 💡 Bonus Tasks

**Bonus 1:** Minimum score requirement

- A team **only wins** if:
  1. It has a higher score than the other team
  2. Its average score is **at least 100 points**

- Hint: Use **logical operators** and multiple `else-if` blocks.

**Bonus 2:** Minimum score for a draw

- A draw **only occurs** if:
  1. Both teams have the same score
  2. Both teams have an average score **greater than or equal to 100**

- Otherwise, **no team wins the trophy**

---

## 📊 Test Data

**Data 1:**

- Dolphins: 96, 108, 89
- Koalas: 88, 91, 110

**Data Bonus 1:**

- Dolphins: 97, 112, 101
- Koalas: 109, 95, 123

**Data Bonus 2:**

- Dolphins: 97, 112, 101
- Koalas: 109, 95, 106

---

## 🛠️ Guidelines

- Use **`const`** for scores that do not change.
- Use **`let`** for calculated averages.
- Use **template literals** for readable console messages.
- Round averages to **1 decimal place** using `.toFixed(1)` if needed.
- Use **logical operators** (`&&`, `||`) for minimum score requirements.
- Handle **draw cases** explicitly.

---

## 📤 Example Output

**Normal case:**

```
Dolphins win the trophy with an average score of 97.7 vs Koalas 96.3
```

**Draw case:**

```
It's a draw! Both teams have an average score of 105
```

**Bonus case (no winner due to minimum score):**

```
No team wins the trophy. Minimum score requirement not met.
```

---

## 💡 Bonus Tips

- Use `if / else if / else` statements for clear decision-making.
- Always check the **minimum score requirement** **before declaring a winner or draw**.
- Keep your console messages **clear and readable** — this makes debugging and testing easier.
