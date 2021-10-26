// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case "Eclipse":
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    case "GNU General Public license v3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case "MIT license":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "Mozilla Public license":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case "Common Development and Distribution license":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case "No Licence used":
      return ""
  }}
  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge (data.license)
  return `
# ${data.title}

${licenseBadge}

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
Copyright (c) [${data.year}] [${data.title}] <br>`
}

module.exports = generateMarkdown;