// Employee constructor
const Employee = require("./Employee");

// ↓To extend Manager constructor with Employee constructor.
class Manager extends Employee {
  constructor(name, id, email, OfficeNumber) {
    super(name, id, email);
    // Manager specific constructor
    this.OfficeNumber = OfficeNumber;
  }
  getRole() {
    return {
      role: (this.role = "Manager"),
    };
  }
}

// ↓To export manager information.
module.exports = Manager;
