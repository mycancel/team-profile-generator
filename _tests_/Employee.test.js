const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Can create an Employee instance', () => {
        const obj = new Employee('Abi', '1234', 'george@fun.com');
        expect((typeof (obj))).toBe('object');
    });

    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Employee(name, '1234', 'george@fun.com');
        expect(obj.name).toEqual(name);
    });

    it('Can set id', () => {
        const id = '1234';
        const obj = new Employee('Abi', id, 'george@fun.com');
        expect(obj.id).toEqual(id);
    });

    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Employee('Abi', '1234', email);
        expect(obj.email).toEqual(email);
    });

    it('Should throw an error if not provided a name value', () => {
        const cb = () => new Employee('', '1234', 'george@fun.com');
        const err = new Error(
            'Please enter a name.'
        );
        expect(cb).toThrowError(err);
    });

    it('Should throw an error if not provided an id value', () => {
        const cb = () => new Employee('Abi', '', 'george@fun.com');
        const err = new Error(
            'Please enter an id.'
        );
        expect(cb).toThrowError(err);
    });
    
    it('Should throw an error if not provided an email value', () => {
        const cb = () => new Employee('Abi', '1234', '');
        const err = new Error(
            'Please enter an email.'
        );
        expect(cb).toThrowError(err);
    });

    describe('getName', () => {
        it('Can return name', () => {
            const name = 'Abi';
            const obj = new Employee(name, '1234', 'george@fun.com');
            const output = obj.getName();
            expect(output).toEqual(name);
        });
    });
    
    describe('getId', () => {
        it('Can return id', () => {
            const id = '1234';
            const obj = new Employee('Abi', id, 'george@fun.com');
            const output = obj.getId();
            expect(output).toEqual(id);
        });
    });
    
    describe('getEmail', () => {
        it('Can return email', () => {
            const email = 'george@fun.com';
            const obj = new Employee('Abi', '1234', email);
            const output = obj.getEmail();
            expect(output).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('Can return role', () => {
            const role = 'Employee'
            const obj = new Employee('Abi', '1234', 'george@fun.com');
            const output = obj.getRole();
            expect(output).toEqual(role);
        });
    });  
});
