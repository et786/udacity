import supertest from "supertest";
import app from "../index";

describe("Endpoint testing", () => {
  const request = supertest(app);

  // Query parameters to test
  const filename = "tcr";
  const pngAssetWidth = 200;
  const pngAssetHeight = 200;

  it("expect to get the root endpoint '/'", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });

  it("expect to get the entry endpoint '/api/images/' even without query parameters", async () => {
    const response = await request.get("/api/images/");
    expect(response.status).toBe(404); // Status is 404 because no query parameters are specified
  });

  it("expect to succesfully get the png asset endpoint given filename, width and height", async () => {
    const endpoint = `/api/images/?filename=${filename}&width=${pngAssetWidth}&height=${pngAssetHeight}`;
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
  });

  it("expect to succesfully serve thumbnail endpoint given filename 'tcr' and previously specified png asset width and height (200 x 200)", async () => {
    const endpoint = `/api/images/?filename=${filename}&width=${pngAssetWidth}&height=${pngAssetHeight}`;
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
  });
});
