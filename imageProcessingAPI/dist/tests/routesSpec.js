"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe("Endpoint testing", () => {
    const request = (0, supertest_1.default)(index_1.default);
    it("expect to get the root endpoint '/'", async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    it("expect to succesfully get the endpoint given name of png, width and height", async () => {
        const filename = 'tcr';
        const width = 200;
        const height = 400;
        const endpoint = `/api/images/?filename=${filename}&width=${width}&height=${height}`;
        const response = await request.get(endpoint);
        expect(response.status).toBe(200);
    });
});
