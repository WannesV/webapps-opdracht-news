
var Request = require("request");

describe("Server", () => {
    let server;
    let sourceId = '5a22ec6b71973f2a58b9b7d1';
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {});

    describe("GET /API/sources", () => {
        let data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/sources", (err, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN)
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(139);
        });
    });

    describe(`GET /API/source/:id`, () => {
        let data = {};
        beforeAll((done) => {
            Request.get(`http://localhost:3000/API/source/${sourceId}`, (err, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                source = body;
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN)
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.name).toEqual('ABC News');
        });
    });

});