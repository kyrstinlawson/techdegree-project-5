const search = document.getElementsByClassName("search-container");
const gallery = document.querySelector(".gallery");
let employeeList = [];
const body = document.body;


fetch("https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,phone,dob")
    .then(response => response.json())
    .then(data => {
        employeeList = data.results;

        generateCard(employeeList)
    });


function generateCard(data) {
    data.map((person, id) => {
        const html = `
            <div class="card" data-index=${id}>
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

body.addEventListener("click", e => {
    if (e.target.className !== "card") {
        let card = e.target.closest('.card');
        let id = card.getAttribute("data-index");
        generateModal(id);
    } else {
        let card = e.target;
        let id = card.getAttribute("data-index");
        generateModal(id);
    }
});

function generateModal(id) {
    let employee = employeeList[id];
    console.log(employee);
    const html = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src=${employee.picture.large} alt="profile picture">
                    <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                    <p class="modal-text">${employee.email}</p>
                    <p class="modal-text cap">${employee.location.city}</p>
                    <hr>
                    <p class="modal-text">${employee.phone}</p>
                    <p class="modal-text">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
                    <p class="modal-text">Birthday: ${employee.dob.date}</p>
                </div>
            </div>
        </div>
        `;
        
        gallery.insertAdjacentHTML("beforeend", html);
};