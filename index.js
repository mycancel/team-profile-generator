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

const continueQ = [
    {
        type: 'confirm',
        message: 'Would you like to add another team member?',
        name: 'confirm',
    },
];

function init() {
    inquirer
        .prompt(managerQs)
        .then((answers) => {
            // Save managerQs to Manager class
            const managerProfile = new Manager(answers);
            console.log(answers);
            console.log('\n');
            continueChoice();
        });
};

function continueChoice() {
    inquirer
        .prompt(continueQ)
        .then((choice) => {
            console.log('\n');
            if (choice.confirm === true) {
                // Role select
                // TODO: Add role select function
                console.log('select role');
            } else {
                // Generate HTML
                console.log('HTML generating');
            }
        })
};

init();
