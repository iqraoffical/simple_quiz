#!/usr/bin/env node
import inquirer from "inquirer";
const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message:
      "Q1:What is correct command to install tsconfig.json file in typscript?",
    choices: ["tsc --in it", "tsc --i", "tsc --init", "npm init -y"],
  },
  {
    name: "question_2",
    type: "list",
    message: "Q2:What is correct command to check the version of typscript?",
    choices: ["tsc -v", "npm init -y", "npm i @types/node", "tsc --init"],
  },
  {
    name: "question_3",
    type: "list",
    message:
      "Q3:Which operator is commonly used for string concatenation in Typescript?",
    choices: ["+", "-", "*", "/"],
  },
  {
    name: "question_4",
    type: "list",
    message:
      "Q4:Which method of Inquirer.js is used to start the prompt interface and receive user in?",
    choices: ["start()", "prompt()", "init()", "run()"],
  },
  {
    name: "question_5",
    type: "list",
    message:
      "Q5:Which of the following command is used to install the types of inquirer?",
    choices: [
      "tsc --init",
      "npm i @types/node -v",
      "npm i --save-dev @types/inquirer",
      ".prompt()",
    ],
  },
]);

let score: number = 0;
switch (quiz.question_1) {
  case "tsc --init":
    console.log("1.Correct!");
    ++score;
    break;
  default:
    console.log("1.Incorrect!");
}
switch (quiz.question_2) {
  case "tsc -v":
    console.log("2.Correct!");
    ++score;
    break;
  default:
    console.log("2.Incorrect!");
}
switch (quiz.question_3) {
  case "+":
    console.log("3.Correct!");
    ++score;
    break;
  default:
    console.log("3.Incorrect!");
}
switch (quiz.question_4) {
  case "prompt()":
    console.log("4.Correct!");
    ++score;
    break;
  default:
    console.log("4.Incorrect!");
}
switch (quiz.question_5) {
  case "npm i --save-dev @types/inquirer":
    console.log("5.Correct!");
    ++score;
    break;
  default:
    console.log("5.Incorrect!");
}
console.log(`Score:${score}`);
