"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
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
        const res = await request.get('/public/assets/full/tgr.jpg');
        expect(res.status).toBe(200);
    });
});
