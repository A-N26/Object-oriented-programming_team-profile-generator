// Employee constructor
const Employee = require("./Employee");

// ↓To extend Manager constructor with Employee constructor.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Manager specific constructor
    this.OfficeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.OfficeNumber;
  }
  getRole() {
    return {
      role: (this.role = "Manager"),
    };
  }
}

console.log("Manager constructor", Employee);

// ↓To export manager information.
module.exports = Manager;
