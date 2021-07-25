const app = require("./server"); // Link to your server file
const supertest = require("supertest");
const req = supertest(app);
it("Testing /all endpoint", async (done) => {
  const res = await req.get("/all");
  expect(res.status).toBe(200); // check if request was successfull
  expect(res.body).toBeDefined(); // check if response returned value of projecteData
  done();
});
