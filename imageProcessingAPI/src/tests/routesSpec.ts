import supertest from "supertest";
import app from '../index';



describe("Endpoint testing", () => {

    const request = supertest(app);

    it("expect to get the root endpoint ('/')", async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });

    it("expect to get the endpoint '/api/images'", async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);  
    });




});