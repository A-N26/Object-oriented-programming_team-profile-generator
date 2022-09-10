// Declare Inquirer
const inquirer = require("inquirer");

// Declare File system
const fs = require("fs");

// ↓Team constants
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// HTML generate constant
const HTMLpage = require("./src/HTMLpage");

// Team building questions and answers to generate team information.
const Profiling = [];

// ↓Manager's info prompts to add to the team.
const addManager = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?(required)",

          validate: (name) => {
            if (name) {
              return true;
            }
            return false, console.log("Please specify a name!");
          },
        },
        {
          type: "input",
          name: "id",
          message:
            "Please assign an Identification number for the manager. (required, six integers)",

          validate: (id) => {
            if (isNaN(id)) {
              return false, console.log("Invalid!, Please enter a valid id#.");
            }
            return true;
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please input an email address. (required)",

          validate: (email) => {
            if (email) {
              return true;
            }
            return false, console.log("Please enter an email address.");
          },
        },
        {
          type: "input",
          name: "OfficeNumber",
          message:
            "Please enter a professional use phone number for the employee. (required, 10 digits)",

          validate: (OfficeNumber) => {
            if (isNaN(OfficeNumber)) {
              console.log("Invalid!, Please try again.");
              return false;
            }
            if (typeof OfficeNumber !== "string") {
              OfficeNumber = OfficeNumber.toString();
              return OfficeNumber.replace(/(\d{3})(\d{3})(\d{4})/);
            }
            if (OfficeNumber.length === 10) {
              return true;
            } else if (OfficeNumber.length < 10) {
              console.log(
                "Invalid!, not enough digits to constitute a phone number."
              );
            } else if (OfficeNumber.length > 10) {
              console.log(
                "Invalid!, Must be less then 10 digits long to constitute a phone number."
              );
            }
          },
        },
      ])
      // ↓Pushing the above info for the html page.
      .then((ManagerData) => {
        const { name, id, email, OfficeNumber } = ManagerData;
        const manager = new Manager(name, id, email, OfficeNumber);

        Profiling.push(manager);
        console.log(manager);
      })
  );
};

// ↓Employee's info prompts to add to the team.
const addEmployee = () => {
  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "EmployeePositions",
          message: "Please select the employee's position.",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?(required)",

          validate: (name) => {
            if (name) {
              return true;
            }
            return false, console.log("Please specify a name!");
          },
        },
        {
          type: "input",
          name: "id",
          message:
            "Please assign an Identification number for the employee. (required, six integers)",

          validate: (id) => {
            if (isNaN(id)) {
              return false, console.log("Invalid!, Please enter a valid id#.");
            }
            return true;
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please input an email address. (required)",

          validate: (email) => {
            if (email) {
              return true;
            }
            return false, console.log("Please enter an email address.");
          },
        },
        // ↓Engineer specific prompt
        {
          type: "input",
          name: "Github",
          message: "Please include a gitHub username for the employee.",

          when: (Github) => Github.role === "Engineer",

          validate: (Github) => {
            if (Github) {
              return true;
            }
            return false;
          },
        },
        // ↓Intern specific prompt
        {
          type: "input",
          name: "school",
          message: "Please mention the intern's current school.",

          when: (school) => school.role === "Intern",

          validate: (Intern) => {
            if (Intern) {
              return true;
            }
            return false;
          },
        },
        {
          type: "confirm",
          name: "AddMoreEmployees",
          message: "Would you like to add more employees to your team?",
          default: false,
        },
      ])
      // ↓Pushing the above info for the html page.
      .then((AddEmployee) => {
        var { name, id, email, role, Github, school, AddMoreEmployees } =
          AddEmployee;
        var employee;
        // ↓For engineer role
        if (role === "Engineer") {
          employee = new Engineer(name, id, email, Github);
        }
        // ↓For Intern role
        else if (role === "Intern") {
          employee = new Intern(name, id, email, school);
          console.log(employee);
        }
        Profiling.push(employee);
        if (AddMoreEmployees) {
          return addEmployee(Profiling);
        }
        return Profiling;
      })
  );
};

// ↓Function to generate HTML file using file system "writeToFile".
const writeToFile = (data) => {
  fs.writeToFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(
      "Success!, your team profile has been generated and can be accessed by opening index.html in dist folder. Thank-you."
    );
  });
};
addManager()
  .then(addEmployee)
  .then((Profiling) => {
    return HTMLpage(Profiling);
  })
  .then((HTMLtemplate) => {
    return writeToFile(HTMLtemplate);
  })
  .catch((err) => {
    console.log(err);
  });
