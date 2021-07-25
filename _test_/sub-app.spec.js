import { getData } from "../src/client/JS/sub-app";
describe("Check if name is included", () => {
  test("Testing the getData() function", () => {
    expect(getData).toBeDefined();
  });
});
