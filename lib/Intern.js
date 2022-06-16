const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;

        if (!this.github.trim().length) {
            throw new Error('Please enter a GitHub username.');
        }
    }
    getGithub() { return this.github; }
    getRole() { return 'Intern'; }
}

module.exports = Intern;