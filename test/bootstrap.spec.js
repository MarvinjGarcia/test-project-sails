const sails = require('sails');

beforeAll((done) => {
    jest.useRealTimers();
    sails.lift({
        datastores: {
            default: {
                adapter: 'sails-disk',
                inMemoryOnly: true
            }
        },
        models: {
            migrate: 'drop'
        },
        hooks: {
            grunt: false
        },
        log: {
            level: 'warm'
        }
    },
        (err) => {
            if (err) {
                return done(err);
            }
            return done();
        });
}, 10000);

afterAll(done => {
    sails.lower(done);
}, 10000);

it('should ok', () => {
    expect(0).toBe(0);
});