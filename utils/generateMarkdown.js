// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license==="Apache"){
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else {
    return "";
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=="undefined"){
    `
## License
This work is licensed by ${license} license.
    `;
  }
  else{
    return `
## License: None    
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description of the project](#description)
* [Instalation](#instalation)
* [Usage](#usage)
* [Credits](#credits)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Contact](#contact)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.contribution}

## Test Instructions
${data.test}

${renderLicenseSection(data.license)}

## Questions?
If you wish to contact me you can do in both:
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}    
`;
}

module.exports = generateMarkdown;
