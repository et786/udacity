import supertest from "supertest";
import app from "../index";

describe("Endpoint testing", () => {
  const request = supertest(app);

  it("expect to get the root endpoint '/'", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });

  it("expect to succesfully get the endpoint given name of png, width and height", async () => {
    const filename = "tcr";
    const width = 200;
    const height = 400;
    const endpoint = `/api/images/?filename=${filename}&width=${width}&height=${height}`;
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
  });
});
