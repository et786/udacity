"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const processor_1 = __importDefault(require("../utilities/processor"));
describe("Resized image", () => {
    it("expect to be found in ./public/thumb directory", async () => {
        const filename = 'tcr';
        const width = 200;
        const height = 300;
        await processor_1.default.resize(filename, width, height);
        expect(fs_1.default.existsSync(`./public/thumb/${filename}${width}x${height}.jpg`)).toBeTruthy();
    });
});
