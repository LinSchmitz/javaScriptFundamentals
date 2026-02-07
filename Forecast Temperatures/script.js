const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const data = data1.concat(data2);
const data1Flat = data1.flat();
console.log(data1Flat);

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const dayTemp = arr[i];

    console.log(`${dayTemp}ºC in ${i + 1} days`);
  }
};

printForecast(temp);
