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
"Are there any test instructions for the project?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return`# ${fileName}
## Table of Contents
1. [Description]{#description}




## Description
${data[0]}
`
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
        ])
        .then((response) => {

            const details = [];
            details.push(response.description);
            details.push(response.installation);
            details.push(response.usage);
            details.push(response.contribution);
            details.push(response.test);
            
            fs.writeFile("./project_readMe/readMe.md", writeToFile(response.title, details), (err) =>
            err ? console.error(err): console.log("readMe has been made"));

        })
  
}

// Function call to initialize app
init();
