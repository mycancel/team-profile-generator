const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;

        // if (!this.officeNumber.trim().length || typeof this.name !== 'string') {
        //     throw new Error('Please enter a valid office number.');
        // }
    }
    getRole() { return 'Manager' }
}

module.exports = Manager;