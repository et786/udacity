"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Determines if the image is of type JPG or PNG 
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
async function resizeImage(uri) {
    let resizedImage;
    let imgType = imageType(uri);
    if (imgType != 'Unknown type') {
        // JPG image
        if (imgType === 'jpg') {
            // PNG image
        }
        else {
        }
    }
    else {
        return;
    }
}
exports.default = {
    imageType,
    resizeImage
};
