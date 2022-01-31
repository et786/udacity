import sharp from "sharp";
import fs from 'fs';



// Determines if the given image file is of type JPG or PNG 
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
}



// Retrieves image specified by name from public/assets/images
async function createResizedImage(name: string, newWidth: number, newHeight: number) {

    let image;
    let imgType = imageType(name);

    if (imgType != 'Unknown type') {
        // PNG image
        if (imgType === 'png') {
            image = sharp(name)
            .png()
            .resize(newWidth, newHeight)
            .toFile(`public/assets/thumb/${name}`)
        // JPG image
        } else {

        }
    } 

    try {
        const resizedImage = await image;  
        return resizedImage;  
    } catch (error) {
        console.log(error);
    }
   
}


export default {
    imageType,
    createResizedImage
};
