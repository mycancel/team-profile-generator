const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const managerQs = [
    {
        type: 'input',
        message: 'What is the manager\'s name?',
        name: 'mName',
    },
    {
        type: 'input',
        message: 'What is the manager\'s id?',
        name: 'mId',
    },
    {
        type: 'input',
        message: 'What is the manager\'s email?',
        name: 'mEmail',
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
    },
];

function init() {
    inquirer
        .prompt(managerQs)
        .then((answers) => {
            // Save managerQs to Manager class
            const managerProfile = new Manager(answers);
            console.log(answers);
            // TODO: Create a function for switching to more questions
        });
};

init();
