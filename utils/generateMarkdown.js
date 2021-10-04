// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  [License](https://opensource.org/licenses/${response.license})

  

  # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)


# Description:
${response.description}

# Installation
${response.installation}

# Usage
${response.usage}

# License:
For more info about the License
![License](https://img.shields.io/badge/License-${response.license}-blue.svg 'License Badge')
- [License](https://opensource.org/licenses/${response.license})
${response.license}

# Contributing
${response.contributing}

# Tests
${response.tests}

# Questions
For questions go to my github page
-[GitHub Profile](https://github.com/${response.username})

For additional questions email me:  ${response.email}.
`;
}


module.exports = generateMarkdown;
