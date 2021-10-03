// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { getMaxListeners } = require('process');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input' ,
        name: 'project tittle'  ,
        message: ' What is the Project Tittle? '
    },
    
    {
      type: 'input' ,
      name: 'description'  ,
      message: ' write a description of your project: '
  },
 
  {
      type: 'input' ,
      name: 'installation'  ,
      message: ' describe the installation: '
  },
  {
      type: 'input' ,
      name:  'usage'  ,
      message: ' What is the project used for? '
  },
  {
      type: 'checkbox' ,
      name: 'license'  ,
      message: ' Chose the appropriate license for this project:' ,
      choices: ['Mit', 'Apache', 'BSD', 'GPL', 'none']
  },
  {
      type: 'input' ,
      name: 'contributing'  ,
      message: ' who is contributing to this project? '
  },
  {
      type: 'input' ,
      name: 'tests'  ,
      message: ' is there a test included?'
  },
  {
      type: 'input' ,
      name: 'questions'  ,
      message: ' do you have any questions? '
  },
  {
      type: 'input' ,
      name: ' username' ,
      message: ' please enter your GitHub username:'
  },
  {
      type: ' input ' ,
      name: ' email ' ,
      message: ' please enter your email:'
  }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
         console.log(err)
          }  else {
        console.log('Success!)
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('readme.md' , generateMarkdown({ ...answers}))
    })
}

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
              1.[GitHub](#githubgithub.com/DeonJeff)
              2.[Email](#emailwwwjeff.d.937@gmail.com)

## Description
## Installation
## Usage
## License
## Contributing
## Tests
## Questions
### [GitHub](github.com/DeonJeff)
### [Email](http://www.jeff.d.937@gmail.com) 
 

// Function call to initialize app
init();
