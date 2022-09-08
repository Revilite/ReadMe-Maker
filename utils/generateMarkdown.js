function renderLicenseBadge(license) {
    // ["MIT", "Apace", "Mozilla", "Eclipse", "None"]
    switch(license){
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case "Apache 2.0":
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-lightblue.svg)](https://opensource.org/licenses/Apache-2.0)`
        case "Mozilla":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-red.svg)](https://opensource.org/licenses/MPL-2.0)`;
        case "Eclipse":
            return `[![License](https://img.shields.io/badge/License-EPL_1.0-purple.svg)](https://opensource.org/licenses/EPL-1.0)`;
        case "None":
            return "";
    }
}

// : Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license == "None"){
        return "This project is not under any license";
    }
    else{
        return `This project is under the ${license} public license`;
    }
}

// : Create a function to generate markdown for README
function generateMarkdown(data) {
    const render = [];
    render.push(renderLicenseBadge(data));
    render.push(renderLicenseSection(data));

 return render;
}

module.exports = generateMarkdown;
