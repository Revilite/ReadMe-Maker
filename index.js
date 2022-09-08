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
"Please type out a license to use\nMIT,  Apache\nMozilla, Eclipse \n",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return`# ${fileName}
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
${data[7]}

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
            message: questions[0],
            name: "title",
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "installation",
        },
        {
            type: "input",
            message: questions[3],
            name: "usage",
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution",
        },
        {
            type: "input",
            message: questions[5],
            name: "test",
        },
        {
            type:"input",
            message: questions[6],
            name: "username"
        },
        {
            type: "input",
            message: questions[7],
            name: "email"
        },
        {
            type: "input",
            message: questions[8],
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

            
            fs.writeFile("./output/readMe.md", writeToFile(response.title, details), (err) =>
            err ? console.error(err): console.log("readMe has been made"));

        })
  
}

// Function call to initialize app
init();
// gen();