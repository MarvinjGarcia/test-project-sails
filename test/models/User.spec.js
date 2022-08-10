const { faker } = require('@faker-js/faker');

const users = [];

for (let index = 0; index < 5; index++) {
    const user = {
        name: faker.name.firstName(),
        email: faker.internet.email()
    }
    users.push(user);
}

console.log(users);

describe.each([
    ['1', users[0]],
    ['2', users[1]],
    ['3', users[2]],
    ['4', users[3]],
    ['5', users[4]],
])(
    'Usuario %s',
    (input, expected) => {
        let newUser;
        let {
            name, email
        } = expected;
        beforeAll(async () => {
            newUser = await User.create(expected).fetch();
        },10000);
        it('Deberia de tener un Id', () => {
            expect(newUser.id).toBeDefined();
        });

        it('Deberia ser un id con valor numerico', () => {
            expect(newUser.id).toBeGreaterThan(0);
        });

        it('Deberia tener un nombre', () => {
            expect(newUser.name).toBeDefined();
        });

        it('Deberia tener un email', () => {
            expect(newUser.email).toBeDefined();
        });


        it('Deberia tener una fecha de creacion', () => {
            expect(newUser.createdAt).toBeDefined();
        });

        it('Deberia tener una fecha de actualizacion', () => {
            expect(newUser.updatedAt).toBeDefined();
        });
    }
);