const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min, max - min);
};

calcTempAmplitude([3, 17, 9, -1]);
