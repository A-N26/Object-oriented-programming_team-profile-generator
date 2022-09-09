// Employee constructor
const Employee = require("./Employee");

// ↓To extend Manager constructor with Employee constructor.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Manager specific constructor
    this.officeNumber = officeNumber;
  }
  officeNumber() {
    return (this.officeNumber = officeNumber);
  }
  getRole() {
    return "Manager";
  }
}

// ↓To export manager information.
module.exports = Manager;
