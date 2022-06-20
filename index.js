const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./generateHTML');

const memory = [];

const managerQs = [
    {
        type: 'input',
        message: 'What is the manager\'s name?',
        name: 'name',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide a name.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the manager\'s id?',
        name: 'id',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide an id.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the manager\'s email?',
        name: 'email',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide an email.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide an office number.');
            return true;
        },
    },
];

const engineerQs = [
    {
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'name',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide a name.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the engineer\'s id?',
        name: 'id',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide an id.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email?',
        name: 'email',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide an email.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide a GitHub username.');
            return true;
        },
    },
];

const internQs = [
    {
        type: 'input',
        message: 'What is the intern\'s name?',
        name: 'name',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide a name.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the intern\'s id?',
        name: 'id',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide an id.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the intern\'s email?',
        name: 'email',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide an email.');
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'school',
        validate: function (input) {
            if (!input.trim().length) return ('Please provide a school.');
            return true;
        },
    },
];

function init() {
    console.log('Answer these questions to generate your Team Profile.')
    inquirer
        .prompt(managerQs)
        .then((answers) => {
            // Save managerQs to new instance of Manager
            const dataValues = Object.values(answers)
            const managerProfile = new Manager(dataValues);
            memory.push(managerProfile);
            console.log('\n');
            continueChoice();
        })
};

function addEngineer() {
    inquirer
        .prompt(engineerQs)
        .then((answers) => {
            // Save engineerQs to new instance of Engineer
            const dataValues = Object.values(answers)
            const engineerProfile = new Engineer(dataValues);
            memory.push(engineerProfile);
            console.log('\n');
            continueChoice();
        })
};

function addIntern() {
    inquirer
        .prompt(internQs)
        .then((answers) => {
            // Save internQs to new instance of Intern
            const dataValues = Object.values(answers)
            const internProfile = new Intern(dataValues);
            memory.push(internProfile);
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
            if (choice.confirm) selectRole();
            else {
                // Generate HTML
                console.log('\nHTML Generating...\n');
                generateHTML(memory);
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
            if (answer.role === 'Engineer') addEngineer();
            else if (answer.role === 'Intern') addIntern();
            else {
                // Generate HTML
                console.log('HTML Generating...\n');
                generateHTML(memory);
            }
        })
};

init();
