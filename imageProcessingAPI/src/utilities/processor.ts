import sharp, { OutputInfo } from "sharp";
import fs from 'fs';

// Retrieves image specified by name from public/assets/images
const resize = async (filename: string, width: number, height: number): Promise<void> => {
    const thumbPath = `./public/thumb/${filename}${width}x${height}`;

    // Original PNG asset
    const pngAsset = await sharp(`assets/full/${filename}.png`);

    // Converts PNG asset to JPEG and resizes image
    const resizedJpeg = await pngAsset.jpeg().resize(width, height);

    resizedJpeg.toFile(thumbPath);
    
}



export default {
    resize
};
