// TODO: Create a function that returns a license badge based on which license is passed in
// what does this mean? - If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined) {
    throw new Error("License is required")
  }
  return `https://img.shields.io/badge/License-${license}-yellow.svg`;
}
// TODO: Create a function that returns the license link
// what does this mean? - If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === undefined) {
    throw new Error("License is required")
  }
  return `https://opensource.org/licenses/${license}`;

}

// TODO: Create a function that returns the license section of README
// what does this mean? - If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Content 
* [Description](#description)
* [Justification](#justification)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [Contact](#contact)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Description
${data.description}
## Justification
${data.justification}
## Technologies
${data.technologies}
## Installation
${data.installation}
## Usage
${data.usage}  
## Contributing
${data.contributing}
## Tests
${data.testing}
## Questions
Github UserName - ${data.github}
Github Profile - https://github.com/${data.github}
Contact me for further info and any questions
Email - ${data.email}
## Credits
${data.credits}
## License
${data.license}<br>
Copyright (c) [${data.year}] [${data.title}] <br>

  `
}

module.exports = generateMarkdown;
