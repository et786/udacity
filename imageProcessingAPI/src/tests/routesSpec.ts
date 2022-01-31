import supertest from "supertest";
import app from '../index';

const request = supertest(app);

describe("Endpoint testing", () => {

    it("expect to get the root endpoint ('/')", async () => {
        const res = await request.get('/');
        expect(res.status).toBe(200);
    });

    it("expect to get the endpoint '/api/images'", async () => {
        const res = await request.get('/api/images');
        expect(res.status).toBe(200);  
    });

    it("expect to get the endpoint '/api/images/me.jpg'", async () => {
        const res = await request.get('/api/images/me.jpg');
        expect(res.status).toBe(200);  
    });


});