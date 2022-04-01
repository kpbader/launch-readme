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
        name: 'installation',
        message: 'Please describe your installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe any usage information.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please describe any contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please describe any test instructions.'
    },
    {
        type:'list',
        name: 'license',
        message: 'Please select any license necessary.',
        choices: ["Apache", "MIT", "BSD", "Mozilla", "Eclipse", "none"]
    },
    {
        type: 'input',
        name: 'questions',
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
        writeToFile('sampleREADME.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
