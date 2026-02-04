const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(d1, d2, d3, k1, k2, k3) {
  // const dolphinsScoreAvg = Math.round(calcAverage(6, 18, 89));
  // const koalasScoreAvg = Math.round(calcAverage(588, 191, 10));

  const dolphinsScoreAvg = Math.round(calcAverage(d1, d2, d3));
  const koalasScoreAvg = Math.round(calcAverage(k1, k2, k3));

  console.log(
    dolphinsScoreAvg,
    koalasScoreAvg,
    dolphinsScoreAvg * 2,
    koalasScoreAvg * 2,
  );

  if (dolphinsScoreAvg >= koalasScoreAvg * 2) {
    console.log(
      `Dolphins win the trophy with an average score of ${dolphinsScoreAvg} vs Koalas ${koalasScoreAvg}`,
    );
  } else if (koalasScoreAvg >= dolphinsScoreAvg * 2) {
    console.log(
      `Koalas win the trophy with an average score of ${koalasScoreAvg} vs Dolphins ${dolphinsScoreAvg}`,
    );
  } else if (dolphinsScoreAvg === koalasScoreAvg) {
    console.log(
      `It's a draw! Both teams have an average score of ${dolphinsScoreAvg}`,
    );
  } else {
    console.log("No team wins the trophy. Minimum score requirement not met.");
  }
}

checkWinner(1000, 20, 99, 61, 400, 50);
