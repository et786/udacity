import fs from 'fs';
import processor from '../utilities/processor';
const {createResizedImage} = require('../utilities/processor');

describe("Validate file type of selected image", () => {
  const jpgImageURI = 'example.jpg';
  const pngImageURI = 'example.png';
  const unrecognizedURI = 'example.gif'; 
  
  it("recognizes JPG", () => {
    const type = processor.imageType(jpgImageURI);
    expect(type).toEqual('jpg');
  });

  it("recognizes PNG", () => {
    const type = processor.imageType(pngImageURI);
    expect(type).toEqual('png');
  });

  it("rejects whatever isn't JPG or PNG", () => {
    const type = processor.imageType(unrecognizedURI);
    expect(type).toEqual('Unknown type');
  });

});



describe("Resize selected image", () => {
  const imageURI = "public/assets/full/me.jpg";
  const cachedImageURI = "public/assets/thumb/me.jpg";

  it("expect resized image file to exist in public/assets/thumb", async () => {
    await processor.createResizedImage(imageURI, 200, 200);
    expect(fs.existsSync(cachedImageURI)).toBeTruthy();
  });
});



