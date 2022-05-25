const SimpleContract = artifacts.require("SimpleContract");

contract("SimpleContract", (accounts) => {
  let simpleContract;

  //Getting new contract instance before each tests
  beforeEach(async () => {
    simpleContract = await SimpleContract.new();
  });

  it("deploy - Should deploy correctly", () => {
    assert.notStrictEqual(simpleContract.address, "");
  });

  it("name - Should have a value", async () => {
    const value = await simpleContract.value();
    const result = value.toString();
    assert.strictEqual(result, "0");
  });
});
