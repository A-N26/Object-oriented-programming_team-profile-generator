// Employee constructor
const Employee = require("./Employee");

// ↓To extend Engineer constructor with employee constructor.
class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email);
    // Engineer specific constructor
    this.Github = Github;
  }
  getGithub() {
    return this.Github;
  }
  getRole() {
    return {
      role: (this.role = "engineer"),
    };
  }
}

console.log("Engineer constructor", Employee);

// ↓To export engineer information.
module.exports = Engineer;
