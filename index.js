// : Include packages needed for this application
const gen = require("./utils/generateMarkdown.js");
const inquirer = require('inquirer');
const fs = require("fs")
// : Create an array of questions for user input
const questions = ["What is the title of your project?", 
"What will the project be about",
"Is there a special way to install it?",
"What is the Usage for it?",
"What are the contribution guidelines",
"Are there any test instructions for the project?",
"What is your Github Username?",
"What is your Email Address?",
"Choose which license you would like to use",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return`# ${fileName}

${gen(data[7])[0]}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [License](#license)
5. [Test](#tests)
6. [Questions](#questions)


## Description
${data[0]}


## Installation
${data[1]}

## Usage
${data[2]}

## Contribution
${data[3]}

## License
${gen(data[7])[1]}

## Tests
${data[4]}

## Questions
[Link to Github](https://www.github.com/${data[5]})\n
Email Address: ${data[6]}`

 }

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
        {
            type: "input",
            message: questions[0], //What is the title of your project?
            name: "title",
        },
        {
            type: "input",
            message: questions[1], //What will the project be about
            name: "description"
        },
        {
            type: "input",
            message: questions[2], //Is there a special way to install it?
            name: "installation",
        },
        {
            type: "input",
            message: questions[3], //What is the Usage for it?
            name: "usage",
        },
        {
            type: "input",
            message: questions[4], //What are the contribution guidelines
            name: "contribution",
        },
        {
            type: "input",
            message: questions[5], //Are there any test instructions for the project?
            name: "test",
        },
        {
            type:"input",
            message: questions[6], //What is your Github Username?
            name: "username"
        },
        {
            type: "input",
            message: questions[7], //What is your Email Address?
            name: "email"
        },
        {
            type: "list",
            choices: ["MIT", "Apache 2.0", "Mozilla", "Eclipse", "None"],
            message: questions[8], //Please type out a license to use
            name: "license",
        },
        ])
        .then((response) => {

            const details = [];
            details.push(response.description);
            details.push(response.installation);
            details.push(response.usage);
            details.push(response.contribution);
            details.push(response.test);
            details.push(response.username);
            details.push(response.email);  
            details.push(response.license);
            gen(response.license);
            
            fs.writeFile("./output/readMe.md", writeToFile(response.title, details), (err) =>
            err ? console.error(err): console.log("readMe has been made"));
            
            console.log(gen(response.license)[1]);


        })
  
}

// Function call to initialize app
init();
// gen();

