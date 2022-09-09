// Employee constructor
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // ↓Returns the profiling info values for the employee.
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "employee";
  }
}

// ↓To export employee information.
module.exports = Employee;
