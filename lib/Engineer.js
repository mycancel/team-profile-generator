const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;

        if (!this.github.trim().length) {
            throw new Error('Please enter an office number.');
        }
    }
    getRole() { return 'Engineer' }
}

module.exports = Engineer;