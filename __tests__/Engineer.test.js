// Engineer constructor
const Engineer = require("../lib/Engineer");

// ↓Create Engineer object
test("create Engineer object", () => {
  const engineer = new Engineer(
    "Ash",
    698869,
    "test@examplemail.com",
    "github"
  );
  expect(engineer.getGithub()).toEqual("github");
});

// ↓To get GitHub from getGitHub function.
test("get GitHub", () => {
  const engineer = new Engineer(
    "Ash",
    698869,
    "test@examplemail.com",
    "github"
  );
  expect(engineer.github).toEqual(engineer.github);
});

// ↓To get Engineer Role from getRole function.
test("get Role", () => {
  const engineer = new Engineer(
    "Ash",
    698869,
    "test@examplemail.com",
    "github"
  );
  expect(engineer.getRole()).toEqual(engineer.getRole());
});
