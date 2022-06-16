const Engineer = require('../lib/Engineer');

// Within the Engineer class
describe('Engineer', () => {
    // Positive Test: can the Engineer class initiate
    it('Can create an Engineer instance', () => {
        const obj = new Engineer('Abi', '1234', 'george@fun.com', 'user');
        expect((typeof (obj))).toBe('object');
    });

    // Positive Test: can the Engineer constructor save the name
    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Engineer(name, '1234', 'george@fun.com', 'user');
        expect(obj.name).toEqual(name);
    });

    // Positive Test: can the Engineer constructor save the id
    it('Can set id', () => {
        const id = '1234';
        const obj = new Engineer('Abi', id, 'george@fun.com', 'user');
        expect(obj.id).toEqual(id);
    });

    // Positive Test: can the Engineer constructor save the email
    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Engineer('Abi', '1234', email, 'user');
        expect(obj.email).toEqual(email);
    });

    // Positive Test: can the Engineer constructor save the GitHub username
    it('Can set github username', () => {
        const github = 'user';
        const obj = new Engineer('Abi', '1234','george@fun.com', github);
        expect(obj.github).toEqual(github);
    });

    // Negative Test: will an error be thrown if a name is not given
    it('Should throw an error if not provided a name value', () => {
        const cb = () => new Engineer('', '1234', 'george@fun.com', 'user');
        const err = new Error(
            'Please enter a name.'
        );
        expect(cb).toThrowError(err);
    });

    // Negative Test: will an error be thrown if an id is not given
    it('Should throw an error if not provided an id value', () => {
        const cb = () => new Engineer('Abi', '', 'george@fun.com', 'user');
        const err = new Error(
            'Please enter an id.'
        );
        expect(cb).toThrowError(err);
    });
    
    // Negative Test: will an error be thrown if an email is not given
    it('Should throw an error if not provided an email value', () => {
        const cb = () => new Engineer('Abi', '1234', '', 'user');
        const err = new Error(
            'Please enter an email.'
        );
        expect(cb).toThrowError(err);
    });

    // Negative Test: will an error be thrown if a username is not given
    it('Should throw an error if not provided a github username', () => {
        const cb = () => new Engineer('Abi', '1234', 'george@fun.com', '');
        const err = new Error(
            'Please enter a GitHub username.'
        );
        expect(cb).toThrowError(err);
    });

    // Within the getName method
    describe('getName', () => {
        // Positive Test
        it('Can return name', () => {
            const name = 'Abi';
            const obj = new Engineer(name, '1234', 'george@fun.com', 'user');
            const output = obj.getName();
            expect(output).toEqual(name);
        });
    });
    
    // Within the getId method
    describe('getId', () => {
        // Positive Test
        it('Can return id', () => {
            const id = '1234';
            const obj = new Engineer('Abi', id, 'george@fun.com', 'user');
            const output = obj.getId();
            expect(output).toEqual(id);
        });
    });
    
    // Within the getEmail method
    describe('getEmail', () => {
        // Positive Test
        it('Can return email', () => {
            const email = 'george@fun.com';
            const obj = new Engineer('Abi', '1234', email, 'user');
            const output = obj.getEmail();
            expect(output).toEqual(email);
        });
    });

    // Within the getRole method
    describe('getRole', () => {
        // Positive Test
        it('Can return role', () => {
            const role = 'Engineer'
            const obj = new Engineer('Abi', '1234', 'george@fun.com', 'user');
            const output = obj.getRole();
            expect(output).toEqual(role);
        });
    });
    
    // Within the getGithub method
    describe('getGithub', () => {
        // Positive Test
        it('Can return github username', () => {
            const github = 'user';
            const obj = new Engineer('Abi', '1234', 'george@fun.com', github);
            const output = obj.getGithub();
            expect(output).toEqual(github);
        });
    });
});