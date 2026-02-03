//****  Nested ternary  ******/
// const age = 36;

// const isAdult = age >= 20;
// const isTeenager = age >= 13 && age <= 19;
// const isChild = age < 13;

// isTeenager
//   ? console.log(`The person is ${age} years old and is a teenager.`)
//   : isAdult
//     ? console.log(`The person is ${age} years old and is an Adult.`)
//     : console.log(`The person is ${age} years old and is a child.`);

//**** If / else if / else  ******/
// const age = 36;

// let stage;

// if (age >= 20) stage = "an adult";
// else if (age >= 13) stage = "a teenager";
// else stage = "a child";

// console.log(`The person is ${age} years old and is ${stage}.`);

//**** Optional Ternary Version  ******/
const age = 36;

const stage = age >= 20 ? "an adult" : age >= 13 ? "a teenager" : "a child";

console.log(`The person is ${age} years old and is ${stage}.`);
