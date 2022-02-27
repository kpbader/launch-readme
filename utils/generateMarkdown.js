// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// google shields.io
function renderLicenseBadge(license) {
  if (license === "none"){
    return ''
  }
  //this needs to render the license badge image
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents


## Installation 
${data.installInstructions}

## Usage 
${data.usageInfo}

## License 

## Contributing
${data.contributionGuide}

## Tests
${data.testInstructions}

## Questions        
${data.githubUsername}
${data.email}



`;
}

module.exports = generateMarkdown;
