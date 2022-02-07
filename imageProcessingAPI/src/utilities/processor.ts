import sharp, { OutputInfo } from "sharp";
import fs from "fs";

// Retrieves PNG image specified by name from public/assets/images, and then converts it to a resized JPEG image
const resize = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  const thumbPath = `./public/thumb/${filename}${width}x${height}.jpg`;

  // Original PNG asset
  const pngAsset = await sharp(`assets/full/${filename}.png`);

  // Converts PNG asset to JPEG and resizes image
  const resizedJpeg = await pngAsset.jpeg().resize(width, height);

  // Create a new resized image thumbnail with specified width and height 
  resizedJpeg.toFile(thumbPath);
};

export default {
  resize
};
