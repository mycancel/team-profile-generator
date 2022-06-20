const Manager = require('../lib/Manager');

// Within the Manager class
describe('Manager', () => {
    // Positive Test: can the Manager class initiate
    it('Can create an Manager instance', () => {
        const obj = new Manager(['Abi', '1234', 'george@fun.com', '437']);
        expect((typeof (obj))).toBe('object');
    });

    // Positive Test: can the Manager constructor save the name
    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Manager([name, '1234', 'george@fun.com', '437']);
        expect(obj.name).toEqual(name);
    });

    // Positive Test: can the Manager constructor save the id
    it('Can set id', () => {
        const id = '1234';
        const obj = new Manager(['Abi', id, 'george@fun.com', '437']);
        expect(obj.id).toEqual(id);
    });

    // Positive Test: can the Manager constructor save the email
    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Manager(['Abi', '1234', email, '437']);
        expect(obj.email).toEqual(email);
    });

    // Positive Test: can the Manager constructor save the office number
    it('Can set office number', () => {
        const office = '437';
        const obj = new Manager(['Abi', '1234', 'george@fun.com', office]);
        expect(obj.officeNumber).toEqual(office);
    });

    // // Negative Test: will an error be thrown if a name is not given
    // it('Should throw an error if not provided a name value', () => {
    //     const cb = () => new Manager(['', '1234', 'george@fun.com', '437']);
    //     const err = new Error(
    //         'Please enter a valid name.'
    //     );
    //     expect(cb).toThrowError(err);
    // });

    // // Negative Test: will an error be thrown if an id is not given
    // it('Should throw an error if not provided an id value', () => {
    //     const cb = () => new Manager(['Abi', '', 'george@fun.com', '437']);
    //     const err = new Error(
    //         'Please enter a valid id.'
    //     );
    //     expect(cb).toThrowError(err);
    // });
    
    // // Negative Test: will an error be thrown if an email is not given
    // it('Should throw an error if not provided an email value', () => {
    //     const cb = () => new Manager(['Abi', '1234', '', '437']);
    //     const err = new Error(
    //         'Please enter a valid email.'
    //     );
    //     expect(cb).toThrowError(err);
    // });

    // // Negative Test: will an error be thrown if an office number is not given
    // it('Should throw an error if not provided an office number value', () => {
    //     const cb = () => new Manager(['Abi', '1234', 'george@fun.com', '']);
    //     const err = new Error(
    //         'Please enter a valid office number.'
    //     );
    //     expect(cb).toThrowError(err);
    // });

    // Within the getName method
    describe('getName', () => {
        // Positive Test
        it('Can return name', () => {
            const name = 'Abi';
            const obj = new Manager([name, '1234', 'george@fun.com', '437']);
            const output = obj.getName();
            expect(output).toEqual(name);
        });
    });
    
    // Within the getId method
    describe('getId', () => {
        // Positive Test
        it('Can return id', () => {
            const id = '1234';
            const obj = new Manager(['Abi', id, 'george@fun.com', '437']);
            const output = obj.getId();
            expect(output).toEqual(id);
        });
    });

    // Within the getEmail method
    describe('getEmail', () => {
        // Positive Test
        it('Can return email', () => {
            const email = 'george@fun.com';
            const obj = new Manager(['Abi', '1234', email, '437']);
            const output = obj.getEmail();
            expect(output).toEqual(email);
        });
    });

    // Within the getRole method
    describe('getRole', () => {
        // Positive Test
        it('Can return role', () => {
            const role = 'Manager'
            const obj = new Manager(['Abi', '1234', 'george@fun.com', '437']);
            const output = obj.getRole();
            expect(output).toEqual(role);
        });
    }); 
});
