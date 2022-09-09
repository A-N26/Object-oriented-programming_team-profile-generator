// Declare Inquirer
const inquirer = require("inquirer");

// Declare File system
const fs = require("fs");
// ↓Function to generate HTML file using file system "writeToFile".
function init() {
  prompts()
    .then((data) => {
      return generateHTMLpage(data);
    })
    .then((html) => {
      fs.writeToFile("./dist/index.html", html);
    })
    .catch((err) => {
      console.log(err);
      return;
    });
  console.log(
    "Success!, your team profile has been generated and can be accessed by opening index.html in dist folder. Thank-you."
  );
}
// Function the initialize the app.
init();

// HTML generate constant
const { generateHTMLpage } = require("./src/HTMLpage.js");

// ↓Team constants
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Team building questions and answers to generate team information.
const EmployeeProfiling = [];

// ↓Manager's info prompts to add to the team.
const ManagerProfile = () => {
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
          name: "officeNumber",
          message:
            "Please enter a professional use phone number for the employee. (required, 10 digits)",

          validate: (officeNumber) => {
            if (isNaN(officeNumber)) {
              console.log("Invalid!, Please try again.");
              return false;
            }
            if (typeof officeNumber !== "string")
              officeNumber = officeNumber.toString();
            if (officeNumber.length === 10) {
              return officeNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
            } else if (officeNumber.length < 10) {
              console.log(
                "Invalid!, not enough digits to constitute a phone number. Please try again!"
              );
            } else if (officeNumber.length > 10) {
              console.log(
                "Invalid!, Must be less then 10 digits long to constitute a phone number. Please try again!"
              );
            }
          },
        },
      ])
      // ↓Pushing the above info for the html page.
      .then((ManagerProfile) => {
        const [name, id, email, officeNumber] = ManagerProfile;
        const manager = new Manager(name, id, email, officeNumber);

        EmployeeProfiling.push(manager);
      })
      .then(ManagerProfile)
      .then((EmployeeProfiling) => {
        return generateHTMLpage(EmployeeProfiling);
      })
      .then((HTMLmanager) => {
        return writeFile(HTMLmanager);
      })
  );
};

// ↓Employee's info prompts to add to the team.
const EmployeeProfile = () => {
  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "EmployeePositions",
          message: "Please select the employee's position.",
          choices: ["Engineer", "Intern", "No more team members to add."],
          default: ["No more team members to add."],
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
      ])
      // ↓Pushing the above info for the html page.
      .then((EmployeeProfile) => {
        const [name, id, email, Github, school] = EmployeeProfile;
        var employee;
        // ↓For engineer role
        if (role === "Engineer") {
          employee = new Engineer(name, id, email, Github);
        }
        // ↓For Intern role
        if (role === "Intern") {
          employee = new Intern(name, id, email, school);
        }
        EmployeeProfiling.push(employee);
      })
      .then(EmployeeProfile)
      .then((EmployeeProfiling) => {
        return generateHTMLpage(EmployeeProfiling);
      })
      .then((HTMLemployee) => {
        return writeFile(HTMLemployee);
      })
  );
};
