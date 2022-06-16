const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Can create an Employee instance', () => {
        const employ = new Employee('Abi', '1234', 'george@fun.com');
        expect((typeof (employ))).toBe('object');
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

    it('should throw an error if not provided a name value', () => {
        const cb = () => new Employee('', '1234', 'george@fun.com');
        const err = new Error(
            'Please enter a name.'
        );
        expect(cb).toThrowError(err);
    });

    it('should throw an error if not provided a name value', () => {
        const cb = () => new Employee('Abi', '', 'george@fun.com');
        const err = new Error(
            'Please enter an id.'
        );
        expect(cb).toThrowError(err);
    });
    
    it('should throw an error if not provided a name value', () => {
        const cb = () => new Employee('Abi', '1234', '');
        const err = new Error(
            'Please enter an email.'
        );
        expect(cb).toThrowError(err);
    });
});