//  Data 1: `[17, 21, 23]`
// Data 2: `[12, 5, -5, 0, 4]`

const temp = [17, 21, 23];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const dayTemp = arr[i];

    console.log(`${dayTemp}ºC in ${i + 1} days`);
  }
};

printForecast(temp);
