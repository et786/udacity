import fs from "fs";
import processor from "../utilities/processor";

describe("Resized image", () => {
  it("expect to be found in ./public/thumb directory", async () => {
    const filename = "tcr";
    const width = 300;
    const height = 300;
    await processor.resize(filename, width, height);
    expect(
      fs.existsSync(`./public/thumb/${filename}${width}x${height}.jpg`)
    ).toBeTruthy();
  });
});
