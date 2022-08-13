// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Project name required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub Username?',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("GitHub Username is required.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project: ',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Project description required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?'
    },
    {
        type: 'input',
        name: 'guideline',
        message: 'What are the contribution guidelines for your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions for your project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please select the license of your project: ',
        choices: ['GNU/LGPL', 'CC', 'ISC', 'Unlicensed', 'None selected'],
        default: 'None selected'
    }])
    .then(input => {
        return input;
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log("README succesfully created!")
    })
}

// TODO: Create a function to initialize app
init = () => {
    questions()
    ,then(input => {
        return generateMarkdown(input);
    })
    .then(markdown => {
        writeToFile('./dist/README.md', markdown);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();
