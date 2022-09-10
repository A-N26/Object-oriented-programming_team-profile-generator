// ↓Template to generate HTML output to index html.
const teamCards = (Cards_employees) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Combo&display=swap" rel="stylesheet">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap-grid.min.css">
            <link rel="stylesheet" href="style.css">
            <title>Team Profile Generator</title>
            </head>

            <body>
                <header>
                    <navbar class="mainTitle" id="mainTitle">
                        <span id="TitleText" class="fluid-container mb-0 w-100 bg-danger"><h class="text:white text-center">My Team</h></span>
                    </navbar>
                </header>

                <section>
                    <div class="container" id="cards">
                        <div class="row d-flex justify-content-center" id="employeeCards">
                            ${Cards_employees}
                        </div>
                    </div>
                </section>
            </body>
        </html>
        `;
};

// ↓To generate card for each employee with their specified info in the html template above.
// ↓For Manager card.
const managerCard = (manager) => {
  return `
    <Section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-title bg-primary text-white">
            <h2>${manager.name}</h2>
            <h3><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>

        <div class="card-content">
            <ul class="list">
                <li class="listItem">ID:${manager.id}</li>
                <li class="listItem">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="listItem">Office number: ${manager.OfficeNumber}</li>
            </ul>
        </div>
    </Section>
    `;
};
// ↓For Engineer card.
const engineerCard = (engineer) => {
  return `
    <Section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-title bg-primary text-white">
            <h2>${engineer.name}</h2>
            <h3><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>

        <div class="card-content">
            <ul class="list">
                <li class="listItem">ID:${engineer.id}</li>
                <li class="listItem">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="listItem">GitHub: <a href="https://github.com/${engineer.Github}">${engineer.Github}</a></li>
            </ul>
        </div>
    </Section>
    `;
};
// ↓For intern card.
const internCard = (intern) => {
  return `
    <Section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-title bg-primary text-white">
            <h2>${intern.name}</h2>
            <h3><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>

        <div class="card-content">
            <ul class="list">
                <li class="listItem">ID:${intern.id}</li>
                <li class="listItem">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="listItem">School: ${intern.school}</li>
            </ul>
        </div>
    </Section>
    `;
};

// ↓Functions to generate array of cards and push to the html template above.
HTMLpage = (data) => {
  Array_Cards = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.role;
    // ↓To call manager function.
    if (role === "Manager") {
      const Card_manager = managerCard(employee);
      Array_Cards.push(Card_manager);
    }
    // ↓To call engineer function.
    if (role === "Engineer") {
      const Card_engineer = engineerCard(employee);
      Array_Cards.push(Card_engineer);
    }
    // ↓To call intern function.
    if (role === "Intern") {
      const Card_intern = internCard(employee);
      Array_Cards.push(Card_intern);
    }
  }
  // ↓To join card array strings.
  const Cards_employees = Array_Cards.join("");
  // ↓To show on index html.
  const finalTeam = teamCards(Cards_employees);
  return finalTeam;
};

// ↓To export content to index.html.
module.exports = HTMLpage;
