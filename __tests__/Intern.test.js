// Intern constructor
const Intern = require("../lib/Intern");
console.log("this is happening through Intern.js", Intern);

// ↓Create Intern object
test("create Intern object", () => {
  const intern = new Intern("Ash", 698869, "test@examplemail.com", "BootCamp");
  expect(intern.getSchool()).toEqual(expect.any(String));
});

// ↓To get School from getOrganization function.
test("get school", () => {
  const intern = new Intern("Ash", 698869, "test@examplemail.com", "BootCamp");
  expect(intern.getSchool()).toEqual("BootCamp");
});

// ↓To get Intern role from getRole function.
test("get role", () => {
  const intern = new Intern("Ash", 698869, "test@examplemail.com", "BootCamp");
  expect(intern.getRole()).toEqual(intern.getRole());
});
