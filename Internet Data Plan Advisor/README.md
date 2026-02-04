# 🧩 JS Practice Challenges – Beginner Level

# Coding Scenario – Internet Data Plan Advisor

## 📌 Scenario

An internet service provider offers multiple **data plans** to customers based on their **account type** and **monthly data consumption**.

Customers fall into one of three categories:

- Student
- Regular
- Business

Each customer is assigned a plan according to how much data they use in a month. Lower usage results in simpler plans, while higher usage results in upgraded plans. Business customers always receive the highest-tier plan regardless of usage.

The system must analyze the provided information and determine the most appropriate plan. If the account type is unknown, the system should respond accordingly.

---

## 🎯 Tasks

- Determine the appropriate data plan for a customer based on their account type and data usage.
- Produce a clear, human-readable message describing the result.
- Ensure invalid account types are handled properly.

---

## 📊 Rules

### Student

- Up to **10 GB** → Basic Plan
- **11–30 GB** → Standard Plan
- Above **30 GB** → Unlimited Plan

### Regular

- Up to **20 GB** → Standard Plan
- Above **20 GB** → Unlimited Plan

### Business

- Any data usage → Unlimited Plus Plan

---

## 🖨 Example Outputs

```
User type: student, Data usage: 8GB → Recommended plan: Basic Plan
```

```
User type: regular, Data usage: 25GB → Recommended plan: Unlimited Plan
```

```
User type: business, Data usage: 120GB → Recommended plan: Unlimited Plus Plan
```

```
Invalid user type
```

---

## 🧪 Test Data

Try your solution with the following cases:

- Student using **8 GB**
- Student using **45 GB**
- Regular user using **10 GB**
- Regular user using **35 GB**
- Business user using **200 GB**
- Unknown user type (e.g., `"guest"`)

---

## ⭐ Bonus (Optional)

- Handle uppercase or mixed-case account types gracefully.
- Validate that data usage is a positive number.
- Ensure the output message is generated in one consistent format.
