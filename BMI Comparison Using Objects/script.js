const marc = {
  fullName: "Marc Schmitz",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 95,
  height: 1.88,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

marc.calcBMI();
john.calcBMI();

console.log(
  marc.BMI > john.BMI
    ? `${marc.fullName}'s BMI (${marc.BMI.toFixed(
        1,
      )}) is higher than ${john.fullName}'s (${john.BMI.toFixed(1)})`
    : `${john.fullName}'s BMI (${john.BMI.toFixed(
        1,
      )}) is higher than ${marc.fullName}'s (${marc.BMI.toFixed(1)})`,
);
