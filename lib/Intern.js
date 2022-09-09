// Employee constructor
const Employee = require("./Employee");

// ↓To extend Intern constructor with Employee constructor.
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    // Intern specific constructor
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

// ↓To export intern information.
module.exports = Intern;
