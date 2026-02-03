// Data 1
let dolphinsScoreAvg = (96 + 108 + 89) / 3;
let koalasScoreAvg = (88 + 91 + 110) / 3;

// Data Bonus 1
// let dolphinsScoreAvg = (97 + 112 + 101) / 3;
// let koalasScoreAvg = (109 + 95 + 123) / 3;

// Data Bonus 2
// let dolphinsScoreAvg = (97 + 112 + 101) / 3;
// let koalasScoreAvg = (109 + 95 + 106) / 3;

// Round averages for readability
dolphinsScoreAvg = dolphinsScoreAvg.toFixed(1);
koalasScoreAvg = koalasScoreAvg.toFixed(1);

// Logic for winner / draw / no winner
if (dolphinsScoreAvg > 100 && dolphinsScoreAvg > koalasScoreAvg) {
  console.log(
    `Dolphins win the trophy with an average score of ${dolphinsScoreAvg} vs Koalas ${koalasScoreAvg}`,
  );
} else if (koalasScoreAvg > 100 && koalasScoreAvg > dolphinsScoreAvg) {
  console.log(
    `Koalas win the trophy with an average score of ${koalasScoreAvg} vs Dolphins ${dolphinsScoreAvg}`,
  );
} else if (
  dolphinsScoreAvg >= 100 &&
  koalasScoreAvg >= 100 &&
  dolphinsScoreAvg === koalasScoreAvg
) {
  console.log(
    `It's a draw! Both teams have an average score of ${dolphinsScoreAvg}`,
  );
} else {
  console.log("No team wins the trophy. Minimum score requirement not met.");
}

// Ternary logic for winner / draw / no winner
// const result =
//   dolphinsScoreAvg >= 100 && dolphinsScoreAvg > koalasScoreAvg
//     ? `Dolphins win the trophy with an average score of ${dolphinsScoreAvg} vs Koalas ${koalasScoreAvg}`
//     : koalasScoreAvg >= 100 && koalasScoreAvg > dolphinsScoreAvg
//       ? `Koalas win the trophy with an average score of ${koalasScoreAvg} vs Dolphins ${dolphinsScoreAvg}`
//       : dolphinsScoreAvg >= 100 &&
//           koalasScoreAvg >= 100 &&
//           dolphinsScoreAvg === koalasScoreAvg
//         ? `It's a draw! Both teams have an average score of ${dolphinsScoreAvg}`
//         : "No team wins the trophy. Minimum score requirement not met.";

// console.log(result);
