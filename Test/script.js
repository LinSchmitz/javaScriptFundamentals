const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const years = [1999, 1957, 2006, 2010, 1980];

console.log(calcAge(years[0]));
console.log(2026 - 1999);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
