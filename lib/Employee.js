class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (!this.name.trim().length || typeof this.name === "string") {
            throw new Error('Please enter a valid name.');
        }
        if (!this.id.trim().length || typeof this.name === "string") {
            throw new Error('Please enter a valid id.');
        }
        if (!this.email.trim().length || typeof this.name === "string") {
            throw new Error('Please enter a valid email.');
        }
    }

    getName() {return this.name;}
    getId() {return this.id;}
    getEmail() {return this.email;}
    getRole() {return 'Employee'};
}

module.exports = Employee;