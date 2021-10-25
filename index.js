// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util');
const path = require ('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        message:"Give your Project a title",
        type:"input",
    },
    {
        name:"contact",
        message:"Provide a github username, an email and link to personal site if available",
        type:"input",
    },
    {
        name:"description",
        message:"Give your Project a description",
        type:"input",
    },
    {
        name:"justification",
        message:"Give info on purpose of this project and what problems it solves",
        type:"input",
    },
    {
        name:"installation",
        message:"Give info on installing this project",
        type:"input",
    },
    {
        name:"usage",
        message:"Give info on the usage of this project",
        type:"input",
    },
    {
        name:"contribution",
        message:"Give details on how to access site and contribute ",
        type:"input",
    },
    {
        name:"credits",
        message:"Give info on assets that require attribution and any collaborators",
        type:"input",
    },
    {
        name: "licence",
        message: "Choose your licence:",
        type: "list",
        choices: ["BSD", "Eclipse", "GNU General Public License", "MIT license", "Mozilla Public License", "Common Development and Distribution License"],
      }
];


//  how do i do a - Table of Contents, 
//  what are - Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app - no clue if this is correct
function init() {
    inquirer.prompt(questions)
    .then(inquirerResponses => {
      console.log('Generating README...');
      let title = `${answers.title}.md`
      writeToFile(title, generateMarkdown({ ...inquirerResponses }));
    });
  }

  
// Function call to initialize app
init();

