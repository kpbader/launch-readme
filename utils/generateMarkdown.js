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
function renderLicenseLink(license) {
  if (license === "none"){
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none"){
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

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


### Contributing
${data.contributionGuide}

### Tests
${data.testInstructions}

### Questions        
[github.com/${data.githubUsername}]
${data.email}

`;
};

module.exports = generateMarkdown;
