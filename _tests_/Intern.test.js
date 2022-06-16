describe('Intern', () => {
    it('Can create an Intern instance', () => {
        const obj = new Intern('Abi', '1234', 'george@fun.com', 'UNCC');
        expect((typeof (obj))).toBe('object');
    });

    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Intern(name, '1234', 'george@fun.com', 'UNCC');
        expect(obj.name).toEqual(name);
    });

    it('Can set id', () => {
        const id = '1234';
        const obj = new Intern('Abi', id, 'george@fun.com', 'UNCC');
        expect(obj.id).toEqual(id);
    });

    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Intern('Abi', '1234', email, 'UNCC');
        expect(obj.email).toEqual(email);
    });

    it('Can set school name', () => {
        const school = 'UNCC';
        const obj = new Intern('Abi', '1234','george@fun.com', school);
        expect(obj.school).toEqual(school);
    });

    it('Should throw an error if not provided a name value', () => {
        const cb = () => new Intern('', '1234', 'george@fun.com', 'UNCC');
        const err = new Error(
            'Please enter a name.'
        );
        expect(cb).toThrowError(err);
    });

    it('Should throw an error if not provided an id value', () => {
        const cb = () => new Intern('Abi', '', 'george@fun.com', 'UNCC');
        const err = new Error(
            'Please enter an id.'
        );
        expect(cb).toThrowError(err);
    });
    
    it('Should throw an error if not provided an email value', () => {
        const cb = () => new Intern('Abi', '1234', '', 'UNCC');
        const err = new Error(
            'Please enter an email.'
        );
        expect(cb).toThrowError(err);
    });

    it('Should throw an error if not provided a school name', () => {
        const cb = () => new Intern('Abi', '1234', 'george@fun.com', '');
        const err = new Error(
            'Please enter a school name.'
        );
        expect(cb).toThrowError(err);
    });

    describe('getName', () => {
        it('Can return name', () => {
            const name = 'Abi';
            const obj = new Intern(name, '1234', 'george@fun.com', 'UNCC');
            const output = obj.getName();
            expect(output).toEqual(name);
        });
    });
    
    describe('getId', () => {
        it('Can return id', () => {
            const id = '1234';
            const obj = new Intern('Abi', id, 'george@fun.com', 'UNCC');
            const output = obj.getId();
            expect(output).toEqual(id);
        });
    });
    
    describe('getEmail', () => {
        it('Can return email', () => {
            const email = 'george@fun.com';
            const obj = new Intern('Abi', '1234', email, 'UNCC');
            const output = obj.getEmail();
            expect(output).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('Can return role', () => {
            const role = 'Intern'
            const obj = new Intern('Abi', '1234', 'george@fun.com', 'UNCC');
            const output = obj.getRole();
            expect(output).toEqual(role);
        });
    });
    
    describe('getSchool', () => {
        it('Can return school', () => {
            const school = 'UNCC';
            const obj = new Intern('Abi', '1234', 'george@fun.com', school);
            const output = obj.getSchool();
            expect(output).toEqual(school);
        });
    });
});