// Employee constructor
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // ↓Returns the profiling info values for the employee.
  getName() {
    return {
      name: this.name,
    };
  }
  getId() {
    return {
      id: this.id,
    };
  }
  getEmail() {
    return {
      email: this.email,
    };
  }
  getRole() {
    return {
      role: (this.role = "employee"),
    };
  }
}

// ↓To export employee information.
module.exports = Employee;
