const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;

        if (!this.officeNumber.trim().length) {
            throw new Error('Please enter an office number.');
        }
    }
    getRole() { return 'Manager' }
}

module.exports = Manager;