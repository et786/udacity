"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const processor_1 = __importDefault(require("../utilities/processor"));
describe("Validate file type of selected image", () => {
    const jpgImageURI = 'example.jpg';
    const pngImageURI = 'example.png';
    const unrecognizedURI = 'example.gif';
    it("recognizes JPG", () => {
        const type = processor_1.default.imageType(jpgImageURI);
        expect(type).toEqual('jpg');
    });
    it("recognizes PNG", () => {
        const type = processor_1.default.imageType(pngImageURI);
        expect(type).toEqual('png');
    });
    it("rejects whatever isn't JPG or PNG", () => {
        const type = processor_1.default.imageType(unrecognizedURI);
        expect(type).toEqual('Unknown type');
    });
});
describe("Resize image", () => {
    it("expect to have resized image written in output_files, according to specified filename, width and height params", async () => {
        const filename = 'tcr.png';
        await processor_1.default.resize(filename, 150, 150);
        expect(fs_1.default.existsSync('src/routes/api/output_files/tcr.png')).toBeTruthy();
    });
});
