// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Describe your project.",
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter what needs to be installed for this project:",
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter the usage information needed for this project:",
      },
      {
        type: "input",
        name: "contribution",
        message: "Who contributed in this project? If the answer is no one put N/A.",
      },
      {
        type: "input",
        name: "test",
        message: "Please enter the testing instructions and if there's none put N/A",
      },
      {
        type: "list",
        name: "license",
        message: "Which license would you like to use for your project?",
        choices: ["MIT", "Apache", "unlicense"],
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your mail for any Questions or Comments:",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your github username for any Questions or Comments:",
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("You've created your own README.md!")
  );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((dataanswer) =>
        {
            const newReadMe = generateMarkdown({...dataanswer});
            writeToFile("README.md",newReadMe);
        }
    );

}

// Function call to initialize app
init();

/////////////////////////////////////////////
