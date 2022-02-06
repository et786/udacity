import sharp, { OutputInfo } from "sharp";
import fs from 'fs';



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
async function resize(filename: string, width: number, height: number) {

    try {
        const result = await sharp(filename).jpeg().resize(width, height);
        return result;
    } catch (error) {
        console.log(error);
    }
   
}


export default {
    resize
};
