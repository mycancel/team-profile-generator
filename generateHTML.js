function generateHTML(profiles) {
    const template = (`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body>
    <header class="bg-dark text-light p-4">
        <h1 class="text-center">Our Team</h1>
    </header>
    <main class="row d-flex justify-content-center">

    ${profiles.map(createCard)}

    </main>
</body>

</html>
`);
    console.log(template);
};

function createCard(profile) {
    const card = (`
        <article class="col-10 col-md-6 col-lg-3 m-4 p-2 card bg-info text-light">
            <h2 class="text-center">${profile.getName()}</h2>
            <h3 class="text-center fs-5"><em>${profile.getRole()}</em></h3>
            <ul class="list-group">
                <li class="list-group-item">Id: ${profile.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a></li>
            </ul>
        </article>
    `);
    return card;
}

 module.exports = generateHTML;