// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // title, description, installation instructions, usage information, contribution guidelines, and test instructions
    // GitHub username and email address
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Please describe your installation instructions.'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Please describe any usage information.'
    },
    {
        type: 'input',
        name: 'contributionGuide',
        message: 'Please describe any contribution guidelines.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please describe any test instructions.'
    },
    {
        type:'list',
        name: 'licenseSelect',
        message: 'Please select any license necessary.',
        choices: ["Apache", "MIT", "BSD", "Mozilla", "Eclipse"]
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your Github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
