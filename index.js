const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');


const writeFileAsync = util.promisify(fs.writeFile);

async function promptUser() {

    try {
        const {
            title,
            description,
            toc,
            installation,
            usage,
            credits,
            license,
            contributing,
            tests,
            github,
            email
        } = await inquirer.prompt([{
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
                message: "choose a license",
                choices: [
                    "none",
                    "MIT Licence",
                    "Apache License",
                    "Eclipse License",
                    "GNU License"
                ]
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
            {
                type: "input",
                name: "github",
                message: "Enter your GitHub Username"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your Email address"
            }

        ]);
        const readme = generateREADME(title, description, toc, installation, usage, credits, license, contributing, tests, github, email);
        await writeFileAsync('./README.md', readme)

    } catch (error) {
        throw error;
    }

}



function generateREADME(...args) {

    const [title,
        description,
        toc,
        installation,
        usage,
        credits,
        license,
        contributing,
        tests,
        github,
        email
    ] = args;
    const readme = `  
# Title 
${title}

## Description 
${description}

## Table of contents 
${toc}

## Installation 
${installation}

## Usage 
${usage}

## Credits 
${credits}

## License 
${license}

## Contributing 
${contributing} 

## Tests 
${tests}

## Questions 
https://github.com/${github}
Contact Email: ${email}`
    return readme;
}
promptUser();