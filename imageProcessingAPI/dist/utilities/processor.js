"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
// Determines if the given i
// Determines if the given image file is of type JPG or PNG 
/*
function imageType(uri: string) {
    const filePattern = /\.(jpg|png)/i;

    if (filePattern.test(uri)){
         if ((/\.jpg/i).test(uri)) {
            return 'jpg';
         } else if ((/\.png/i).test(uri)) {
            return 'png';
         }
    } else {
        return 'Unknown type';
    }
}*/
// Retrieves image specified by name from public/assets/images
async function resize(filename, width, height) {
    try {
        const result = await (0, sharp_1.default)(filename).jpeg().resize(width, height);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = {
    resize
};
