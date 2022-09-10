// Employee constructor
const Employee = require("./Employee");

// ↓To extend Intern constructor with Employee constructor.
class Intern extends Employee {
  constructor(name, id, email, School) {
    super(name, id, email);
    // Intern specific constructor
    this.school = School;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return {
      role: (this.role = "Intern"),
    };
  }
}

// ↓To export intern information.
module.exports = Intern;
