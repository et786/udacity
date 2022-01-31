"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processor_1 = __importDefault(require("../utilities/processor"));
const { createResizedImage } = require('../utilities/processor');
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
/*
describe("Resize selected image", () => {
  const imageURI = "public/assets/full/me.jpg";
  const cachedImageURI = "public/assets/thumb/me.jpg";

  it("expect resized image file to exist in public/assets/thumb", async () => {
    await processor.createResizedImage(imageURI, 200, 200);
    expect(fs.existsSync(cachedImageURI)).toBeTruthy();
  });
});
*/
