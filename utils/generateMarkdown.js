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
function generateMarkdown(data) {
  return `# ${data.title}\n

  # Description
  ${response.description}\n

  # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
8. [Contact](#contact)

# Description\n
${response.description}\n

# Installation\n
${response.installation}\n

# Usage\n
${response.usage}\n

# License\n
${response.license}\n

# Contributing\n
${response.contributing}\n

# Tests\n
${response.tests}\n

# Questions\n
${response.questions}\n

# Contact\n
${response.contact}\n



`;
}


module.exports = generateMarkdown;
