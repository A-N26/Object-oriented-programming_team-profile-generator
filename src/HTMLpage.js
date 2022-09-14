// ↓To export content to index.html.
const employeeCard = (Profiling) => {
    // ↓To generate card for each employee with their specified info in the html template above.

    let Cards_Array = '';

    for (let i = 0; i < Profiling.length; i++) {
        if (Profiling[i].getRole() === "manager") {
            Cards_Array += `
        <Section class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-title bg-primary text-white">
                <h2>${ Profiling[i].getName() }</h2>
                <h3><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>

            <div class="card-content">
                <ul class="list">
                    <li class="listItem">ID:${ Profiling[i].getId() }
                    </li>
                    <li class="listItem">Email:<a href="mailto:${ Profiling[i].getEmail() }">${ Profiling[i].email }</a>
                    </li>
                    <li class="listItem">Office number: ${ Profiling[i].getOfficeNumber() }
                    </li>
                </ul>
            </div>
        </Section>
    `;
        };
        if (Profiling[i].getRole() === "engineer") {
            Cards_Array += `
            <Section class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-title bg-primary text-white">
                    <h2>${ Profiling[i].getName() }</h2>
                    <h3><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                </div>

                <div class="card-content">
                    <ul class="list">
                        <li class="listItem">ID:${ Profiling[i].getId() }</li>
                        <li class="listItem">Email: <a href="mailto:${ Profiling[i].getEmail() }">${ Profiling[i].email }</a></li>
                        <li class="listItem">GitHub: <a href="https://github.com/${ Profiling[i].getGithub() }">${ Profiling[i].Github }</a></li>
                    </ul>
                </div>
            </Section>
        `;
        }
        if (Profiling[i].getRole() === "intern") {
            Cards_Array += `
            <Section class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-title bg-primary text-white">
                    <h2>${ Profiling[i].getName() }</h2>
                    <h3><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                </div>

                <div class="card-content">
                    <ul class="list">
                        <li class="listItem">ID:${ Profiling[i].getId() }</li>
                        <li class="listItem">Email: <a href="mailto:${ Profiling[i].getEmail() }">${ Profiling[i].email }</a></li>
                        <li class="listItem">School: ${ Profiling[i].getSchool() }</li>
                    </ul>
                </div>
            </Section>
        `;
        }
    }

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
            <div class="row d-flex justify-content-center" id="employeeCards">${Cards_Array}
            </div>
        </div>
    </section>
</body>
</html>
`;
};

module.exports = employeeCard;