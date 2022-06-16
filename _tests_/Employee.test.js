const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Can create an Employee instance', () => {
        const employ = new Employee('Abi', 1234, 'george@fun.com');
        expect((typeof (employ))).toBe('object');
    });

    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Employee(name);
        expect(obj.name).toEqual(name);
    });

    it('Can set id', () => {
        const id = '1234';
        const obj = new Employee('Abi', id);
        expect(obj.id).toEqual(id);
    });

    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Employee('Abi', 1234, email);
        expect(obj.email).toEqual(email);
    });

    it('should throw an error if not provided a name value', () => {
        const cb = () => new Employee('', 1234, 'george@fun.com');
        const err = new Error(
            'Please enter a name.'
        );
        expect(cb).toThrowError(err);
    });
});