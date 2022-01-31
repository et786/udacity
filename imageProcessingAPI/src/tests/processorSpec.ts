import processor from "../utilities/processor";


describe("Image type checker", () => {

  it("recognizes JPG images", () => {
    const uri = 'example.jpg';
    const type = processor.imageType(uri);
    expect(type).toEqual('jpg');
  });

  it("recognizes PNG images", () => {
    const uri = 'example.png';
    const type = processor.imageType(uri);
    expect(type).toEqual('png');
  });

  it("rejects types that are not JPG or PNG", () => {
    const uri = 'example.gif'; 
    const type = processor.imageType(uri);
    expect(type).toEqual('Unknown type');
  });

});


