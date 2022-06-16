describe('Engineer', () => {
    it('Can create an Engineer instance', () => {
        const obj = new Engineer('Abi', '1234', 'george@fun.com', 'user');
        expect((typeof (obj))).toBe('object');
    });

    it('Can set name', () => {
        const name = 'Abi';
        const obj = new Engineer(name, '1234', 'george@fun.com', 'user');
        expect(obj.name).toEqual(name);
    });

    it('Can set id', () => {
        const id = '1234';
        const obj = new Engineer('Abi', id, 'george@fun.com', 'user');
        expect(obj.id).toEqual(id);
    });

    it('Can set email', () => {
        const email = 'george@fun.com';
        const obj = new Engineer('Abi', '1234', email, 'user');
        expect(obj.email).toEqual(email);
    });

    it('Can set github username', () => {
        const github = 'george@fun.com';
        const obj = new Engineer('Abi', '1234','george@fun.com', github);
        expect(obj.github).toEqual(github);
    });

    it('Should throw an error if not provided a name value', () => {
        const cb = () => new Engineer('', '1234', 'george@fun.com', 'user');
        const err = new Error(
            'Please enter a name.'
        );
        expect(cb).toThrowError(err);
    });

    it('Should throw an error if not provided an id value', () => {
        const cb = () => new Engineer('Abi', '', 'george@fun.com', 'user');
        const err = new Error(
            'Please enter an id.'
        );
        expect(cb).toThrowError(err);
    });
    
    it('Should throw an error if not provided an email value', () => {
        const cb = () => new Engineer('Abi', '1234', '', 'user');
        const err = new Error(
            'Please enter an email.'
        );
        expect(cb).toThrowError(err);
    });

    it('Should throw an error if not provided a github username', () => {
        const cb = () => new Engineer('Abi', '1234', 'george@fun.com', '');
        const err = new Error(
            'Please enter a GitHub username.'
        );
        expect(cb).toThrowError(err);
    });

    describe('getName', () => {
        it('Can return name', () => {
            const name = 'Abi';
            const obj = new Engineer(name, '1234', 'george@fun.com', 'user');
            const output = obj.getName();
            expect(output).toEqual(name);
        });
    });
    
    describe('getId', () => {
        it('Can return id', () => {
            const id = '1234';
            const obj = new Engineer('Abi', id, 'george@fun.com', 'user');
            const output = obj.getId();
            expect(output).toEqual(id);
        });
    });
    
    describe('getEmail', () => {
        it('Can return email', () => {
            const email = 'george@fun.com';
            const obj = new Engineer('Abi', '1234', email, 'user');
            const output = obj.getEmail();
            expect(output).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('Can return role', () => {
            const role = 'Engineer'
            const obj = new Engineer('Abi', '1234', 'george@fun.com', 'user');
            const output = obj.getRole();
            expect(output).toEqual(role);
        });
    });
    
    describe('getGithub', () => {
        it('Can return github username', () => {
            const github = 'user';
            const obj = new Engineer('Abi', '1234', 'george@fun.com', github);
            const output = obj.getGithub();
            expect(output).toEqual(github);
        });
    });
});