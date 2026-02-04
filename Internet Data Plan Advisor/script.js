const customerType = "regular"; // student | regular | business | unknown
let customerDataUsage = 15;

switch (customerType) {
  case "student":
    customerDataUsage <= 10
      ? console.log(
          `User type: ${customerType}, Data usage: ${customerDataUsage}GB → Recommended plan: Basic Plan`,
        )
      : customerDataUsage > 30
        ? console.log(
            `User type: ${customerType}, Data usage: ${customerDataUsage}GB → Recommended plan: Unlimited Plan `,
          )
        : console.log(
            `User type: ${customerType}, Data usage: ${customerDataUsage}GB → Recommended plan: Standard Plan `,
          );

    break;
  case "regular":
    customerDataUsage <= 20
      ? console.log(`User type: ${customerType}, Data usage: ${customerDataUsage}GB → Recommended plan: Standard Plan
 `)
      : console.log(`User type: ${customerType}, Data usage: ${customerDataUsage}GB → Recommended plan: Unlimited Plan
 `);
    break;
  case "business":
    console.log(`User type: ${customerType},Data usage: ${customerDataUsage}GB → Recommended plan: Unlimited Plus Plan
 `);
    break;

  default:
    console.log("Invalid user type");
    break;
}
