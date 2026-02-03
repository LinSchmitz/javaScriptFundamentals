# 🧩 JS Practice Challenges – Beginner Level

---

## **2️⃣ Age Calculator**

**Scenario:**
You want to check if a person is **a teenager**, **an adult**, or **a child**.

**Rules:**

- Age 13–19 → "teenager"
- Age >= 20 → "adult"
- Age < 13 → "child"

**Given:**

```js
const age = 16;
```

**Tasks:**

1. Store age in `const`
2. Create a boolean variable for “isTeenager”
3. Log a sentence:

```
The person is 16 years old and is a teenager.
```

🔹 Comparison Solution Table

| Style               | Readability | Lines | Best Use                |
| ------------------- | ----------- | ----- | ----------------------- |
| Nested ternary      | Low         | 3+    | Tiny one-offs           |
| Optional ternary    | Medium      | 1     | Simple decisions        |
| If / else if / else | High        | 4–6   | Production & interviews |
