// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 2000,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  summerise: function () {
    this.summery = `${this.firstName} is a ${this.calcAge()} years old and he has ${
      this.hasDriversLicense ? "a" : "no"
    } Drivers License`;
    return this.summery;
  },
};

// console.log(jonas.calcAge());
// console.log(jonas.age);

console.log(jonas.summerise());
// console.log(jonas.summery);

//objectc

// const jonas = {
//   firsName: "jonas",
//   lastName: "schmedtmann",
//   job: "teacher",
//   friends: ["Michel", "peter", "stefan"],
// };

// console.log(
//   `${jonas.firsName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}  `,
// );

// Array
// const calcAge = function (birthYear) {
//   return 2026 - birthYear;
// };

// const years = [1999, 1957, 2006, 2010, 1980];

// console.log(calcAge(years[0]));
// console.log(2026 - 1999);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);
