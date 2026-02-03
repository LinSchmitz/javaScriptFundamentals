const teamAScoreAvg = (90 + 108 + 89) / 3;
const teamBScoreAvg = (88 + 91 + 110) / 3;

console.log(teamAScoreAvg, teamBScoreAvg);
const teamAWins = teamAScoreAvg > teamBScoreAvg;

// console.log(
//   teamAWins
//     ? `Team A's average (${teamAScoreAvg.toFixed(1)}) is higher than Team B's (${teamBScoreAvg.toFixed(1)})`
//     : `Team B's average (${teamBScoreAvg.toFixed(1)}) is higher than Team A's (${teamAScoreAvg.toFixed(1)})`,
// );

let message;

if (teamAScoreAvg > teamBScoreAvg) {
  message = `Team A's average (${teamAScoreAvg.toFixed(1)}) is higher than Team B's (${teamBScoreAvg.toFixed(1)})`;
} else if (teamBScoreAvg > teamAScoreAvg) {
  message = `Team B's average (${teamBScoreAvg.toFixed(1)}) is higher than Team A's (${teamAScoreAvg.toFixed(1)})`;
} else {
  message = `Both teams have the same average score (${teamAScoreAvg.toFixed(1)})`;
}

console.log(message);

// or minimal ternary version
console.log(
  teamAScoreAvg === teamBScoreAvg
    ? `Both teams have the same average score (${teamAScoreAvg.toFixed(1)})`
    : teamAScoreAvg > teamBScoreAvg
      ? `Team A's average (${teamAScoreAvg.toFixed(1)}) is higher than Team B's (${teamBScoreAvg.toFixed(1)})`
      : `Team B's average (${teamBScoreAvg.toFixed(1)}) is higher than Team A's (${teamAScoreAvg.toFixed(1)})`,
);
