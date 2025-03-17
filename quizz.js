console.log("Welcome to Jason's Wow Quiz!");

let qOne =
  "Question 1: What is the current expansion we are playing on WoW?\nA: Shadowlands\nB: Pandaria\nC: The War Within\nD: Dragonflight\n";
let qTwo =
  "Question 2: Which one is not a role in Wow?\nA: Tank\nB: Brawler\nC: Healer\nD: DPS\n";
let qThree =
  "Question 3: What day of the week does the vault resets?\nA: Monday\nB: Wednesday\nC: Friday\nD: Sunday\n";
let qFour =
  "Question 4: Which one is the highest gear level?\nA: Mythic\nB: Hero\nC: Adventur\nD: Veteran\n";
let qFive =
  "Question 5: Who became the leader after... fucking... uhm.... Garrosh Hellscream? (Quote from Boncer)\nA: Rexxar\nB: Sen'Jin\nC: General Grebo\nD: Vol'Jin\n";
let qSix =
  "Question 6: How many specs did Druid get?\nA: One\nB: Two\nC: Three\nD: Four\n";
let qSeven =
  "Question 7: what is the raid dungeon name this patch?\nA: Liberation of Umdermine\nB: Dragon Soul\nC: Siege of Orgrimmar\nD: Nerub-ar Palace\n";
let qEight =
  "Question 8: What is Zushi(Laurenzo) bad at?\nA: Coding\nB: doing Stone Vault Dungeon\nC: aiming in fps games\nD: wooing Izzie(his gf)\n";
let qNine =
  "Question 9: Who is known for like taking frontals in the Discord server 'Team Deplete'?\nA: Labyrinth (Jason)\nB: Loee (Adam)\nC: Jazz\nD: Zushi (Laurenzo)\n";
let qTen =
  "Question 10: What is the most despised class in wow?\nA: Feral Druid\nB: Feral Druid\nC: Feral Druid\nD: All of the Above\n";

function askQuestion(question) {
  const answer = prompt(question);
  return answer.toUpperCase();
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
  score = await questionHandler(qThree, "B", score);
  score = await questionHandler(qFour, "A", score);
  score = await questionHandler(qFive, "D", score);
  score = await questionHandler(qSix, "D", score);
  score = await questionHandler(qSeven, "A", score);
  score = await questionHandler(qEight, "B", score);
  score = await questionHandler(qNine, "C", score);
  score = await questionHandler(qTen, "D", score);
  printResult(score);
}

function printResult(score) {
  if (score >= 6) {
    console.log(`Well Done! You scored ${score}/10.`);
  } else {
    console.log(
      `Ha Ha Ha... ${score}/10. Maybe you should leave the server...`
    );
  }
  playAgain();
}

function playAgain() {
  const response = askQuestion("Would you like to try again? (Y/N)");
  if (response === "Y") {
    main();
  } else if (response === "N") {
    Deno.exit();
  } else {
    playAgain();
  }
}

main();
