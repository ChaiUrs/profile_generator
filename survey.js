/*
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable : ", name => {
  rl.question("What's an activity you like doing ?: ", activity => {
    rl.question("What do you listen to while doing that?: ", music => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)?: ", meal => {
        rl.question("What's your favourite thing to eat for that meal?: ", food => {
          rl.question("Which sport is your absolute favourite?: ", sport => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!: ", superpower => {
              rl.close();
              console.log(`My name is ${name}. I love ${activity} and listening to ${music}. Prefers ${food} for ${meal}. My favourite sport is ${sport} and my superpower is ${superpower}.`);
            });
          });
        });
      });
    });
  });
});
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favorite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];
const answer = [
];
let getAnswers = function(questions, qNum, answers) {
  rl.question(questions[qNum], (answer) => {
    answers[qNum] = answer;
    if(qNum === questions.length - 1) {
      printAsParagraph(answers);
      return rl.close();
    }
    getAnswers(questions, ++qNum, answers);
  });
};

let printAsParagraph = function(arr) {
  console.log(`My name is ${arr[0]}, I like ${arr[1]} and listening to ${arr[2]}. 
  My favourite meal is ${arr[3]} because I like ${arr[4]}. My favorite sport is ${arr[5]}
  and my superpower is ${arr[6]}. Nice to meet you!`);
};
let survey = (question, answer) => {
  getAnswers(question, 0, answer);
};
survey(question, answer);