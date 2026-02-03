const marcMass = 78;
const marcHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;

const marcBMI = marcMass / marcHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = marcBMI > johnBMI;

console.log(
  markHigherBMI
    ? `Mark's BMI (${marcBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`
    : `John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${marcBMI.toFixed(1)})`,
);
