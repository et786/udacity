"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
// Retrieves image specified by name from public/assets/images
const resize = async (filename, width, height) => {
    const thumbPath = `./public/thumb/${filename}${width}x${height}`;
    // Original PNG asset
    const pngAsset = await (0, sharp_1.default)(`assets/full/${filename}.png`);
    // Converts PNG asset to JPEG and resizes image
    const resizedJpeg = await pngAsset.jpeg().resize(width, height);
    resizedJpeg.toFile(thumbPath);
};
exports.default = {
    resize
};
