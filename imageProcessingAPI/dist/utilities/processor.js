"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
// Determines if the given image file is of type JPG or PNG 
function imageType(uri) {
    const filePattern = /\.(jpg|png)/i;
    if (filePattern.test(uri)) {
        if ((/\.jpg/i).test(uri)) {
            return 'jpg';
        }
        else if ((/\.png/i).test(uri)) {
            return 'png';
        }
    }
    else {
        return 'Unknown type';
    }
}
// Retrieves image specified by name from public/assets/images
async function resize(filename, width, height) {
    let image;
    let imgType = imageType(filename);
    try {
        if (imgType != 'Unknown type') {
            // PNG image
            if (imgType === 'png') {
                const result = await (0, sharp_1.default)(filename)
                    .png()
                    .resize(width, height)
                    .toFile(`../src/api/output_files/${filename}`);
                return result;
                // JPG image (default)
            }
            else {
                const result = await (0, sharp_1.default)(filename)
                    .jpeg()
                    .resize(width, height)
                    .toFile(`../src/api/output_files/${filename}`);
                return result;
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = {
    imageType,
    resize
};
