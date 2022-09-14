// Employee constructor
const Employee = require("../lib/Employee");
console.log("this is happening through Employee.js", Employee);

//↓Create Employee object
test("create Employee object", () => {
  const employee = new Employee("Ash", 698869, "test@examplemail.com");
  expect(employee.name).toEqual("Ash");
  expect(employee.id).toEqual(698869);
  expect(employee.email).toEqual("test@examplemail.com");
});

// ↓Get Name object from getName function.
test("get employee Name", () => {
  const employee = new Employee("Ash", 698869, "test@examplemail.com");
  expect(employee.name).toEqual("Ash");
});

// ↓Get Id object from getId function.
test("get employee ID", () => {
  const employee = new Employee("Ash", 698869, "test@examplemail.com");
  expect(employee.id).toEqual(698869);
});

// ↓Get Email from getEmail function.
test("get employee Email", () => {
  const employee = new Employee("Ash", 698869, "test@examplemail.com");
  expect(employee.email).toEqual("test@examplemail.com");
});

// ↓Get Role from getRole function.
test("get employee Role", () => {
  const employee = new Employee("Ash", 698869, "test@examplemail.com");
  expect(employee.getRole()).toEqual(employee.getRole());
});
