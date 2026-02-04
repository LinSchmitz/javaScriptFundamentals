// Arrow function to calculate average
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Function to check the winner
function checkWinner(dScores, kScores) {
  // Calculate averages
  const dolphinsAvg = calcAverage(...dScores);
  const koalasAvg = calcAverage(...kScores);

  // Determine winner based on double score rule
  if (dolphinsAvg >= koalasAvg * 2) {
    console.log(
      `Dolphins win the trophy with an average score of ${dolphinsAvg} vs Koalas ${koalasAvg}`,
    );
  } else if (koalasAvg >= dolphinsAvg * 2) {
    console.log(
      `Koalas win the trophy with an average score of ${koalasAvg} vs Dolphins ${dolphinsAvg}`,
    );
  } else if (dolphinsAvg === koalasAvg) {
    console.log(
      `It's a draw! Both teams have an average score of ${dolphinsAvg}`,
    );
  } else {
    console.log("No team wins the trophy. Minimum score requirement not met.");
  }
}

// Test with Data 1
checkWinner([1000, 20, 99], [61, 400, 50]);
