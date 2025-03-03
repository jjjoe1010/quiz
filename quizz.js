console.log("Welcome to Jason's Wow Quiz!");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let qOne =
  "Question 1: What is the current expansion we are playing on WoW?\nA: Shadowlands\nB: Pandaria\nC: The War Within\nD: Dragonflight\n";
let qTwo =
  "Question 2: Who is known for taking frontals in the Discord server 'Team Deplete'?\nA: Labryinth (Jason)\nB: Jazz\nC: Loee (Adam)\nD: Zushi (Laurenzo)\n";

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.toUpperCase());
    });
  });
}

async function questionHandler(question, correctAnswer, score) {
  while (true) {
    const response = await askQuestion(question);

    if (["A", "B", "C", "D"].includes(response)) {
      if (response === correctAnswer) {
        score += 1;
      }
      return score;
    } else {
      console.log("Error: Please enter A, B, C, or D.");
    }
  }
}

async function main() {
  let score = 0;

  score = await questionHandler(qOne, "C", score);
  score = await questionHandler(qTwo, "B", score);
  // add more questions
  printResult(score);
  rl.close();
}

function printResult(score) {
  if (score >= 1) {
    console.log(`Well Done! You scored ${score}/2.`);
  } else {
    console.log(`Ha Ha, ${score}/2. Maybe you should leave the server...`);
  }
}

main();
