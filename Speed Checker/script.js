const speed = 80;
const isSpeeding = speed > 80;
const states = isSpeeding ? "speeding" : "safe";

console.log(`The car is going ${speed} km/h and is ${states}.`);
