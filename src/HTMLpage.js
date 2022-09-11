// ↓To export content to index.html.
module.exports = EmployeeCards => {
// ↓Template to generate the HTML output from index js.
    return`
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
                <navbar class="mainTitle" id="mainTitle"><span id="TitleText" class="fluid-container mb-0 w-100 bg-danger"><h class="text:white text-center">My Team</h></span>
                </navbar>
            </header>

            <section>
                <div class="container" id="cards">
                    <div class="row d-flex justify-content-center" id="employeeCards">${TeamCards(EmployeeCards)}
                    </div>
                </div>
            </section>
        </body>
        </html>
    `;
};

// ↓To generate card for each employee with their specified info in the html template above.
const TeamCards = (EmployeeCards) => {
    // ↓For Manager card.
    const managerCard = (manager) => {
        return `
            <Section class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-title bg-primary text-white">
                    <h2>${manager.getName()}</h2>
                    <h3><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                </div>

                <div class="card-content">
                    <ul class="list">
                        <li class="listItem">ID:${manager.getId()}
                        </li>
                        <li class="listItem">Email:<a href="mailto:${manager.getEmail()}">${manager.email}</a>
                        </li>
                        <li class="listItem">Office number: ${manager.getOfficeNumber()}
                        </li>
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
                    <h2>${engineer.getName()}</h2>
                    <h3><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                </div>

                <div class="card-content">
                    <ul class="list">
                        <li class="listItem">ID:${engineer.getId()}</li>
                        <li class="listItem">Email: <a href="mailto:${engineer.getEmail()}">${engineer.email}</a></li>
                        <li class="listItem">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.Github}</a></li>
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
                    <h2>${intern.getName()}</h2>
                    <h3><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                </div>

                <div class="card-content">
                    <ul class="list">
                        <li class="listItem">ID:${intern.getId()}</li>
                        <li class="listItem">Email: <a href="mailto:${intern.getEmail()}">${intern.email}</a></li>
                        <li class="listItem">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </Section>
        `;
    };

    // ↓Functions to generate array of cards and push to the html template above.

    const Cards_Array = [];

    // ↓To create manager card with details in the html template above.
    Cards_Array.push(
        EmployeeCards.filter(employee => employee.getRole() === 'Manager')
            .map(manager => managerCard(manager))
    );
    // ↓To create engineer card with details in the html template above.
    Cards_Array.push(
        EmployeeCards.filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => engineerCard(engineer))
            .join('\n')
    );
    // ↓To create intern card with details in the html template above.
    Cards_Array.push(
        EmployeeCards.filter(employee => employee.getRole() === 'Intern')
            .map(intern => internCard(intern))
            .join('\n')
    );
    return Cards_Array.join('\n')
}
