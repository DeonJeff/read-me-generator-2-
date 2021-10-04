// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { getMaxListeners } = require('process');
const writeFileasync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt ([
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
      message: ' Chose the appropriate license for this project:' ,
      choices: [
           'Mit',
            'Apache' , 
            ' BSD' ],
      name: 'license'  
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
  },
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync( path.join(process.cwd(), fileName ) , data)
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileasync('README.md', readme);
        console.log('success!');
    } catch (err) {
        console.log(err);
    }
    }

// Function call to initialize app
init();
