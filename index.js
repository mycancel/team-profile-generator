const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

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

const engineerQs = [
    {
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'eName',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s id?',
        name: 'eId',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email?',
        name: 'eEmail',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
    },
]

function init() {
    inquirer
        .prompt(managerQs)
        .then((answers) => {
            // Save managerQs to Manager class
            const managerProfile = new Manager(answers);
            console.log(answers);
            console.log('\n');
            continueChoice();
        })
};

function continueChoice() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Would you like to add another team member?',
                name: 'confirm',
            },
        ])
        .then((choice) => {
            if (choice.confirm === true) {
                // Role select
                selectRole();
            } else {
                // Generate HTML
                console.log('HTML generating');
            }
        })
};

function selectRole() {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                message: 'What role would you like to add?',
                choices: ['Engineer', 'Intern', 'Cancel'],
                name: 'role',
            },
        ])
        .then((answer) => {
            console.log('\n');
            if (answer.role === 'Engineer') {
                addEngineer();
            } else if (answer.role === 'Intern') {
                console.log('Intern');
            } else {
                // Generate HTML
                console.log('HTML generating');
            }
        })
};

function addEngineer() {
    inquirer
    .prompt(engineerQs)
    .then((answers) => {
        // Save engineerQs to Engineer class
        const engineerProfile = new Engineer(answers);
        console.log(answers);
        console.log('\n');
        continueChoice();
    })
}

init();
