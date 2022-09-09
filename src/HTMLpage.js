// ↓To export content to index.html.
module.exports = HTMLpage;

// ↓To generate HTML output to index html.
const generatePage = (Cards_employees) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Combo&display=swap" rel="stylesheet">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap-grid.min.css">
            <link rel="stylesheet" href="style.css">
            <title>Team Profile</title>
            </head>

            <body>

            </body>
        </html>
        `;
};

// ↓To generate array of cards and push to index html.
HTMLpage = (info) => {
  ArrayCards = [];

  for (var i = 0; i < info.length; i++) {
    const employee = info[i];
    const role = employee.getRole();
    // ↓To call manager function.
    if (role === "Manager") {
      const Card_manager = getManager(employee);
      ArrayCards.push(Card_manager);
    }
    // ↓To call engineer function.
    if (role === "Engineer") {
      const Card_engineer = getManager(employee);
      ArrayCards.push(Card_engineer);
    }
    // ↓To call intern function.
    if (role === "Intern") {
      const Card_intern = getManager(employee);
      ArrayCards.push(Card_intern);
    }
  }
  // ↓To join card array strings.
  const Cards_employees = ArrayCards.join("");
  // ↓To show on index html.
  const finalTeam = generatePage(Cards_employees);
  return finalTeam;
};
