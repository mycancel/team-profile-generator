const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQs = [
    {
        type: 'input',
        message: 'What is the manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the manager\'s id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the manager\'s email?',
        name: 'email',
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
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
    },
];

const internQs = [
    {
        type: 'input',
        message: 'What is the intern\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the intern\'s id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the intern\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'school',
    },
];

function init() {
    inquirer
        .prompt(managerQs)
        .then((answers) => {
            // Save managerQs to Manager class
            const dataValues = Object.values(answers)
            const managerProfile = new Manager(dataValues);
            console.log(dataValues);
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
                addIntern();
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
            const dataValues = Object.values(answers)
            const engineerProfile = new Engineer(dataValues);
            console.log(dataValues);
            console.log('\n');
            continueChoice();
        })
}

function addIntern() {
    inquirer
        .prompt(internQs)
        .then((answers) => {
            // Save internQs to Intern class
            const dataValues = Object.values(answers)
            const internProfile = new Intern(dataValues);
            console.log(dataValues);
            console.log('\n');
            continueChoice();
        })
}

init();
