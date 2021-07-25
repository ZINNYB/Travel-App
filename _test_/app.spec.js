import { handleSubmit } from "../src/client/JS/app";

describe("Testing form submit", () => {
  it("should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
