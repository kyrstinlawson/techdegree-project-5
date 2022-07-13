const search = document.getElementsByClassName("search-container");
const gallery = document.querySelector(".gallery");


fetch("https://randomuser.me/api/?results=12")
    .then(response => response.json())
    .then(data => {
        const employeeList = data.results;

        generateCard(employeeList)
    });

function generateCard(data) {
    for (let i=0; i < data.length; i++) {
        let html = `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${data[i].picture.medium}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
                    <p class="card-text">${data[i].email}</p>
                    <p class="card-text cap">${data[i].location.city}, ${data[i].location.state}</p>
                </div>
            </div>
        `;

        gallery.insertAdjacentHTML("beforeend", html);
    }
};
