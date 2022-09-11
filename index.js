// ↓Declarations //
// Inquirer
const inquirer = require("inquirer");
// File system
const fs = require("fs");
// ↓Output file path.
const path = require("path");
const output_dir = path.resolve(__dirname, "dist");
const path_output = path.join(output_dir, "TeamProfile.html");
// ↓Team
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// HTML generate constant
const HTMLpage = require("./src/HTMLpage");

Profiling = [];

// ↓Team building questions and answers to generate team information.
function BuildTeam () {
  function TeamProfile() {
      inquirer.prompt([
        {
          type: "list",
          name: "EmployeePositions",
          message: "Please select an employee position to add from teh following.",
          choices: ["Manager", "Engineer", "Intern", "No more employees to add to team."],
        },
      ]).then,
        (AddEmployees) => {
          switch (AddEmployees.EmployeePositions) {
            case "Manager":
              addManager();
              break;
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
            default:
              teamPage();
          }
        };
    };

    // ↓Manager's info prompts to add to the team.
    function addManager() {
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

              validate: (officeNumber) => {
                if (isNaN(officeNumber)) {
                  console.log("Invalid!, Please try again.");
                  return false;
                }
                if (typeof officeNumber !== "string") {
                  officeNumber = officeNumber.toString();
                  return officeNumber.replace(/(\d{3})(\d{3})(\d{4})/);
                }
                if (officeNumber.length === 10) {
                  return true;
                } else if (officeNumber.length < 10) {
                  console.log(
                    "Invalid!, not enough digits to constitute a phone number."
                  );
                } else if (officeNumber.length > 10) {
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
            TeamProfile();
            console.log(manager);
          })
    };

    // ↓Engineer's info prompts to add to the team.
    function addEngineer() {
      return inquirer
        .prompt([
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
              "Please assign an Identification number for the employee. (required, six digits)",

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
            message:
              "Please include a gitHub username for the employee. (required)",

            validate: (Github) => {
              if (Github) {
                return true;
              }
              return (
                false,
                console.log("Please include a gitHub username for the employee.")
              );
            },
          },
        ])
        .then((EngineerData) => {
          var { name, id, email, Github } = EngineerData;
          const engineer = new Engineer(name, id, email, Github);
          Profiling.push(engineer);
          TeamProfile();
          console.log(engineer);
        });
    };

    // ↓Engineer's info prompts to add to the team.
    function addIntern() {
      return inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the intern's name?(required)",

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
              "Please assign an Identification number for the employee. (required, six digits)",

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
            name: "school",
            message: "Please mention the intern's current school.",

            validate: (school) => {
              if (school) {
                return true;
              }
              return (
                false,
                console.log("Please include the name of the intern's school.")
              );
            },
          },
        ])
        .then((InternData) => {
          var { name, id, email, School } = InternData;
          const intern = new Intern(name, id, email, School);
          Profiling.push(intern);
          TeamProfile();
          console.log(intern);
        });
    };

    // ↓Function to generate HTML file using file system "writeToFile".
    const teamPage = () => {
      fs.writeToFile(path_output, HTMLpage(Profiling))

        console.log(
          "Success!, your team profile has been generated and can be accessed by opening index.html in dist folder. Thank-you."
        );
    };
  TeamProfile();
};
BuildTeam();
