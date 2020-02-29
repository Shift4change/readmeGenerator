var inquirer = require('inquirer');
// var util = require('util/api.js');
var fs = require('fs');
let axios = require('axios');
inquirer.prompt([
    {
        type: "input",
        message: " what is the title of your project",
        name: "title"
    },
    {   type: "input",
        message: "what is the use case for this project?",
        name: "usage"

    },
    {
        type:"input",
        message: "Describe your project",
        name: "description"
    },
    {
        name: "userName",
        message: "What is your GitHub username?",
        type: "input"
        },
        {name:"test",
        message:"how did you test this",
        type:"input",

        },
    {
        type: "input",
        message: "what technologies are you using",
        name: "badges"
    },
    {
        type: "input",
        message: "how to install",
        name: "install"
    },
    {
        type: "input",
        message: "who contributed",
        name: "contributors"
    },
    {
        type: "input",
        message: "what is your E-mail",
        name: "email"
    },
    {
        type: "input",
        message: "",
        name: "questions"
    },
    {
        name: "licence",
        message: "What licence are you using",
        type: "list",
        choices: [
            "MIT",
            "ISC",
            "Microsoft Public License",
            "Mozilla Public License"
        ]
    }


])

.then(function(answers){
    const queryUrl = `https://api.github.com/users/${answers.userName}`;
    axios 
    .get(queryUrl)
    .then(function(gitHubres){
        console.log(gitHubres.data.avatar_url)
        console.log(gitHubres.data.email)
         fs.writeFile("GenX.md", `# ${answers.title}
## Table of content:       
        * Usage

        * How to Install

        * Technologies

        * Test

        * Contributors
        
        * GitHub

        * Questions

## Description: 
${answers.description}
## Username:
${answers.userName} 
## Email
${answers.email}   
## How To Install: 
${answers.install}
## Usage
${answers.usage}
## Test
${answers.test}
## Contributors
${answers.contributors}
## Technologies Used: 
![image](https://img.shields.io/badge/${answers.badges}-used-red)
## Avatar:
![image](${gitHubres.data.avatar_url})
## Lisences:  
${answers.licence}
## GitHub: 
${answers.userName}`, err => {
        if (err) {
            throw err
        }
        console.log("Readme successfully created")
    })
      console.log(gitHubres);
      });
    
})

// .then(response => {
   
// })






