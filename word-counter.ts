#! /usr/bin/env node

import inquirer from "inquirer";

const result : {
    sentence :  String
} = await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: "Please Enter Paragraph or Sentence  to count the words: "
}
]);

const words = result.sentence.trim().split(" ")
console.log(words);
console.log(`You entered ${words.length} words`);