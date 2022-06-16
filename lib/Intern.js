const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;

        if (!this.school.trim().length) {
            throw new Error('Please enter a school name.');
        }
    }
    getSchool() { return this.school; }
    getRole() { return 'Intern'; }
}

module.exports = Intern;