const temp = 28;
const isHot = temp > 30;
const isCold = temp < 15;

const feeling = isHot ? "hot" : isCold ? "cold" : "mild";

console.log(`The temperature is ${temp}°C, it feels ${feeling} today.`);
