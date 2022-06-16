class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (!this.name.trim().length) {
            throw new Error('Please enter a name.');
        }
        if (!this.id.trim().length) {
            throw new Error('Please enter an id.');
        }
        if (!this.email.trim().length) {
            throw new Error('Please enter an email.');
        }
    }

    getName() {return this.name;}
    getId() {return this.id;}
    getEmail() {return this.email;}
    getRole() {return 'Employee'};
}

module.exports = Employee;