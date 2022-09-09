// Employee constructor
const Employee = require("./Employee");

// ↓To extend Engineer constructor with employee constructor.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    // Engineer specific constructor
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "engineer";
  }
}

// ↓To export engineer information.
module.exports = Engineer;
