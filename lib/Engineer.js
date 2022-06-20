const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor({name, id, email, github}) {
        super(name, id, email);

        this.github = github;

        // if (!this.github.trim().length || typeof this.name !== 'string') {
        //     throw new Error('Please enter a valid GitHub username.');
        // }
    }
    getGithub() { return this.github; }
    getRole() { return 'Engineer'; }
}

module.exports = Engineer;