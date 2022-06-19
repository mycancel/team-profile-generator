const Intern = require('../lib/Intern');

// Within the Intern class,
describe('Intern', () => {
    // Positive Test: can the Intern class initiate
    it('Can create an Intern instance', () => {
        const obj = new Intern('Abi', '1234', 'george@fun.com', 'UNCC');
        expect((typeof (obj))).toBe('object');
    });

    // Positive Test: can the Intern constructor save the name
    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Intern(name, '1234', 'george@fun.com', 'UNCC');
        expect(obj.name).toEqual(name);
    });

    // Positive Test: can the Intern constructor save the id
    it('Can set id', () => {
        const id = '1234';
        const obj = new Intern('Abi', id, 'george@fun.com', 'UNCC');
        expect(obj.id).toEqual(id);
    });

    // Positive Test: can the Intern constructor save the email
    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Intern('Abi', '1234', email, 'UNCC');
        expect(obj.email).toEqual(email);
    });

    // Positive Test: can the Intern constructor save the school
    it('Can set school name', () => {
        const school = 'UNCC';
        const obj = new Intern('Abi', '1234','george@fun.com', school);
        expect(obj.school).toEqual(school);
    });

    // Negative Test: will an error be thrown if a name is not given
    it('Should throw an error if not provided a name value', () => {
        const cb = () => new Intern('', '1234', 'george@fun.com', 'UNCC');
        const err = new Error(
            'Please enter a valid name.'
        );
        expect(cb).toThrowError(err);
    });

    // Negative Test: will an error be thrown if an id is not given
    it('Should throw an error if not provided an id value', () => {
        const cb = () => new Intern('Abi', '', 'george@fun.com', 'UNCC');
        const err = new Error(
            'Please enter a valid id.'
        );
        expect(cb).toThrowError(err);
    });
    
    // Negative Test: will an error be thrown if an email is not given
    it('Should throw an error if not provided an email value', () => {
        const cb = () => new Intern('Abi', '1234', '', 'UNCC');
        const err = new Error(
            'Please enter a valid email.'
        );
        expect(cb).toThrowError(err);
    });

    // Negative Test: will an error be thrown if a school is not given
    it('Should throw an error if not provided a school name', () => {
        const cb = () => new Intern('Abi', '1234', 'george@fun.com', '');
        const err = new Error(
            'Please enter a valid school name.'
        );
        expect(cb).toThrowError(err);
    });

    // Within the getName method
    describe('getName', () => {
        // Positive Test
        it('Can return name', () => {
            const name = 'Abi';
            const obj = new Intern(name, '1234', 'george@fun.com', 'UNCC');
            const output = obj.getName();
            expect(output).toEqual(name);
        });
    });
    
    // Within the getId method
    describe('getId', () => {
        // Positive Test
        it('Can return id', () => {
            const id = '1234';
            const obj = new Intern('Abi', id, 'george@fun.com', 'UNCC');
            const output = obj.getId();
            expect(output).toEqual(id);
        });
    });
    
    // Within the getEmail method
    describe('getEmail', () => {
        // Positive Test
        it('Can return email', () => {
            const email = 'george@fun.com';
            const obj = new Intern('Abi', '1234', email, 'UNCC');
            const output = obj.getEmail();
            expect(output).toEqual(email);
        });
    });

    // Within getRole method
    describe('getRole', () => {
        // Positive Test
        it('Can return role', () => {
            const role = 'Intern'
            const obj = new Intern('Abi', '1234', 'george@fun.com', 'UNCC');
            const output = obj.getRole();
            expect(output).toEqual(role);
        });
    });
    
    // Within the getSchool method
    describe('getSchool', () => {
        // Positive Test
        it('Can return school', () => {
            const school = 'UNCC';
            const obj = new Intern('Abi', '1234', 'george@fun.com', school);
            const output = obj.getSchool();
            expect(output).toEqual(school);
        });
    });
});