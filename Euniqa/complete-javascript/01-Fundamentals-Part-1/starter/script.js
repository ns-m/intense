//let strData = 'check result';
//if (strData === 'check result') alert('done');

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 110];

let averageScoreDolphins =
  scoreDolphins.reduce((acc, item) => (acc += item)) / scoreDolphins.length;

let averageScoreKoalas =
  scoreKoalas.reduce((acc, item) => (acc += item)) / scoreKoalas.length;

if (averageScoreDolphins > averageScoreKoalas) {
  console.log(
    `Dolphins team (average Score ${averageScoreDolphins}) is winner!`
  );
} else if (averageScoreDolphins < averageScoreKoalas) {
  console.log(`Koalas team (average Score ${averageScoreKoalas}) is winner!`);
} else {
  console.log(`WHF? It's draw!`);
}

const scoreDolphinsB1 = [97, 112, 101];
const scoreKoalasB1 = [109, 95, 123];

let averageScoreDolphinsB1 =
  scoreDolphinsB1.reduce((acc, item) => (acc += item)) / scoreDolphinsB1.length;

let averageScoreKoalasB1 =
  scoreKoalasB1.reduce((acc, item) => (acc += item)) / scoreKoalasB1.length;

if (
  averageScoreDolphinsB1 > averageScoreKoalasB1 &&
  averageScoreDolphinsB1 > 100
) {
  console.log(
    `Dolphins team (average Score ${averageScoreDolphinsB1}) is winner!`
  );
} else if (
  averageScoreDolphinsB1 < averageScoreKoalasB1 &&
  averageScoreKoalasB1 > 100
) {
  console.log(
    `Koalas team (average Score ${averageScoreKoalasB1}) is winner! `
  );
} else {
  console.log(
    `WHF? It's draw! ${averageScoreDolphinsB1} ${averageScoreKoalasB1}`
  );
}
