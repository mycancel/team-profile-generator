const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Can create an Manager instance', () => {
        const obj = new Manager('Abi', '1234', 'george@fun.com', '437');
        expect((typeof (obj))).toBe('object');
    });

    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Manager(name, '1234', 'george@fun.com', '437');
        expect(obj.name).toEqual(name);
    });

    it('Can set id', () => {
        const id = '1234';
        const obj = new Manager('Abi', id, 'george@fun.com', '437');
        expect(obj.id).toEqual(id);
    });

    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Manager('Abi', '1234', email, '437');
        expect(obj.email).toEqual(email);
    });

    it('Can set office number', () => {
        const office = '437';
        const obj = new Manager('Abi', '1234', 'george@fun.com', office);
        expect(obj.office).toEqual(office);
    });

    it('Should throw an error if not provided a name value', () => {
        const cb = () => new Manager('', '1234', 'george@fun.com', '437');
        const err = new Error(
            'Please enter a name.'
        );
        expect(cb).toThrowError(err);
    });

    it('Should throw an error if not provided an id value', () => {
        const cb = () => new Manager('Abi', '', 'george@fun.com', '437');
        const err = new Error(
            'Please enter an id.'
        );
        expect(cb).toThrowError(err);
    });
    
    it('Should throw an error if not provided an email value', () => {
        const cb = () => new Manager('Abi', '1234', '', '437');
        const err = new Error(
            'Please enter an email.'
        );
        expect(cb).toThrowError(err);
    });

    it('Should throw an error if not provided an office number value', () => {
        const cb = () => new Manager('Abi', '1234', 'george@fun.com', '');
        const err = new Error(
            'Please enter an office number.'
        );
        expect(cb).toThrowError(err);
    });

    describe('getName', () => {
        it('Can return name', () => {
            const name = 'Abi';
            const obj = new Manager(name, '1234', 'george@fun.com', '437');
            const output = obj.getName();
            expect(output).toEqual(name);
        });
    });
    
    describe('getId', () => {
        it('Can return id', () => {
            const id = '1234';
            const obj = new Manager('Abi', id, 'george@fun.com', '437');
            const output = obj.getId();
            expect(output).toEqual(id);
        });
    });
    
    describe('getEmail', () => {
        it('Can return email', () => {
            const email = 'george@fun.com';
            const obj = new Manager('Abi', '1234', email, '437');
            const output = obj.getEmail();
            expect(output).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('Can return role', () => {
            const role = 'Manager'
            const obj = new Manager('Abi', '1234', 'george@fun.com', '437');
            const output = obj.getRole();
            expect(output).toEqual(role);
        });
    }); 
});
