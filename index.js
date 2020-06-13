const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt = [{
        {
            type: "input",
            name: "title",
            message: "Enter your Project title"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description"
        },
        {
            type: "input",
            name: "toc",
            message: "Enter table of contents separated by comma"
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation instructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Describe usage"
        },
        {
            type: "input",
            name: "credits",
            message: "List your credits"
        },
        {
            type: "checkbox",
            name: "license",
            message: "choose a license"
            choices: [
                "none"
                "MIT Licence",
                "Apache License",
                "Eclipse License",
                "GNU License"
            ]
        },
        {
            type: "input",
            name: "badge",
            message: "Enter your badge"
        },
        {
            type: "input",
            name: "contributing",
            message: "What are the rules for contributing"
        },
        {
            type: "input",
            name: "tests",
            message: "Write tests for your app here"
        },

    }];
}

function generateReadme(answers) {
    return `Title ${answers.title}`
}