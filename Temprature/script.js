const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, 12, -8, 10, 5];

const temperatures = temperatures1.concat(temperatures2);
console.log(temperatures);

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min, max - min);
};

// calcTempAmplitude([3, 17, 9, "error", -1]);
calcTempAmplitude(temperatures);
