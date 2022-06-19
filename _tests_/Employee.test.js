const Employee = require('../lib/Employee');

// Within the Employee class,
describe('Employee', () => {
    // Positive Test: can the Employee class initiate
    it('Can create an Employee instance', () => {
        const obj = new Employee('Abi', '1234', 'george@fun.com');
        expect((typeof (obj))).toBe('object');
    });

    // Positive Test: can the Employee constructor save the name
    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Employee(name, '1234', 'george@fun.com');
        expect(obj.name).toEqual(name);
    });

    // Positive Test: can the Employee constructor save the id
    it('Can set id', () => {
        const id = '1234';
        const obj = new Employee('Abi', id, 'george@fun.com');
        expect(obj.id).toEqual(id);
    });

    // Positive Test: can the Employee constructor save the email
    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Employee('Abi', '1234', email);
        expect(obj.email).toEqual(email);
    });

    // // Negative Test: will an error be thrown if a name is not given
    // it('Should throw an error if not provided a name value', () => {
    //     const cb = () => new Employee('', '1234', 'george@fun.com');
    //     const err = new Error(
    //         'Please enter a valid name.'
    //     );
    //     expect(cb).toThrowError(err);
    // });

    // // Negative Test: will an error be thrown if an id is not given
    // it('Should throw an error if not provided an id value', () => {
    //     const cb = () => new Employee('Abi', '', 'george@fun.com');
    //     const err = new Error(
    //         'Please enter a valid id.'
    //     );
    //     expect(cb).toThrowError(err);
    // });
    
    // // Negative Test: will an error be thrown if an email is not given
    // it('Should throw an error if not provided an email value', () => {
    //     const cb = () => new Employee('Abi', '1234', '');
    //     const err = new Error(
    //         'Please enter a valid email.'
    //     );
    //     expect(cb).toThrowError(err);
    // });

    // Within the getName method,
    describe('getName', () => {
        // Positive Test
        it('Can return name', () => {
            const name = 'Abi';
            const obj = new Employee(name, '1234', 'george@fun.com');
            const output = obj.getName();
            expect(output).toEqual(name);
        });
    });
    
    // Within the getId method,
    describe('getId', () => {
        // Positive Test
        it('Can return id', () => {
            const id = '1234';
            const obj = new Employee('Abi', id, 'george@fun.com');
            const output = obj.getId();
            expect(output).toEqual(id);
        });
    });
    
    // Within the getEmail method,
    describe('getEmail', () => {
        // Positive Test
        it('Can return email', () => {
            const email = 'george@fun.com';
            const obj = new Employee('Abi', '1234', email);
            const output = obj.getEmail();
            expect(output).toEqual(email);
        });
    });

    // Within the getRole method,
    describe('getRole', () => {
        // Positive Test
        it('Can return role', () => {
            const role = 'Employee'
            const obj = new Employee('Abi', '1234', 'george@fun.com');
            const output = obj.getRole();
            expect(output).toEqual(role);
        });
    });  
});
