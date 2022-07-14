const search = document.getElementsByClassName("search-container");
const gallery = document.querySelector(".gallery");


fetch("https://randomuser.me/api/?results=12")
    .then(response => response.json())
    .then(data => {
        const employeeList = data.results;

        generateCard(employeeList)
    });

function generateCard(data) {
    data.map(person => {
        const html = `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${person.picture.large}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                    <p class="card-text">${person.email}</p>
                    <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
                </div>
            </div>
        `;

        gallery.insertAdjacentHTML("beforeend", html);
    });
};
