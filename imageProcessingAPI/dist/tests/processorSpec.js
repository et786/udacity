"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processor_1 = __importDefault(require("../utilities/processor"));
describe("Image type checker", () => {
    it("recognizes JPG images", () => {
        const uri = 'example.jpg';
        const type = processor_1.default.imageType(uri);
        expect(type).toEqual('jpg');
    });
    it("recognizes PNG images", () => {
        const uri = 'example.png';
        const type = processor_1.default.imageType(uri);
        expect(type).toEqual('png');
    });
    it("rejects types that are not JPG or PNG", () => {
        const uri = 'example.gif';
        const type = processor_1.default.imageType(uri);
        expect(type).toEqual('Unknown type');
    });
});
