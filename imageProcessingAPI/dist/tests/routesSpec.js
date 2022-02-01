"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe("Endpoint testing", () => {
    const request = (0, supertest_1.default)(index_1.default);
    it("expect to get the root endpoint ('/')", async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    it("expect to get the endpoint '/api/images'", async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });
    /*
        it("expect to find image by specified URL params in browser", async () => {
            const filename = 'tcr.png';
            const response = await request.get(`/api/images/${filename}`);
            expect(response.status).toBe(200);
        });
    
    */
});
