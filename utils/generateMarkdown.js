// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// google shields.io
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === "BSD") {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === "Mozilla") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === "Eclipse") {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return ''
  } else if (license === "Apache") {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === "MIT") {
    return 'http://www.opensource.org/licenses/MIT';
  } else if (license === "BSD") {
    return 'http://www.opensource.org/licenses/BSD';
  } else if (license === "Mozilla") {
    return 'http://www.opensource.org/licenses/Mozilla';
  } else if (license === "Eclipse") {
    return 'http://www.opensource.org/licenses/Eclipse';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ''
  } else {
    return `License: ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.title} ${renderLicenseBadge(data.licenseSelect)}

## Table of Contents
### * [Description](#description)
### * [Installation](#installationInstructions)
### * [Usage](#usageInfo)
### * [Contributions](#contributionGuide)
### * [Test](#testInstructions)
### * [License](#licenseSelect)
### * [Questions](#githubUsername)


### Description
${data.description}

### Installation 
${data.installInstructions}

### Usage 
${data.usageInfo}

### License 
${renderLicenseSection(data.licenseSelect)}
${data.licenseSelect}
${renderLicenseLink(data.licenseSelect)}

### Contributing
${data.contributionGuide}

### Tests
${data.testInstructions}

### Questions        
https://github.com/${data.githubUsername}
${data.email}

`;
};

module.exports = generateMarkdown;
