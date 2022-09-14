// Manager constructor
const Manager = require("../lib/Manager");
console.log("this is happening through Manager.js", Manager);

// ↓Create Manager Object
test("Create Manager Object", () => {
  const manager = new Manager(
    "Ash",
    698869,
    "test@examplemail.com",
    6472065891
  );
  expect(manager.OfficeNumber).toEqual(6472065891);
});

// ↓To get Manager role from getRole function.
test("Get role", () => {
  const manager = new Manager(
    "Ash",
    698869,
    "test@examplemail.com",
    6472065891
  );
  expect(manager.getRole()).toEqual(manager.getRole());
});
