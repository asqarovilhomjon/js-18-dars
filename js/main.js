import { USERS } from "../db/server.js";

//popap start
const btnOpen = document.querySelector(".btn__open");
const btnClose = document.querySelector(".btn__close");
const popap = document.querySelector(".popap");
const overlay = document.querySelector(".overlay");
//popap finish

//model star
const model = document.querySelector(".model");
const Firstname = document.querySelector(".model__Firstname");
const Lastname = document.querySelector(".model__Lastname");
const Username = document.querySelector(".model__Username");
const Iscore = document.querySelector(".model__score");
//model end

let userData = JSON.parse(localStorage.getItem("users")) || [];

createCard(userData);

model.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = Firstname.value;
    let lastname = Lastname.value;
    let username = Username.value;
    let score = Iscore.value;

    let newUser = {
        id: new Date().getTime(),
        name,
        lastname,
        username,
        score,
    };
    userData.push(newUser);
    console.log(USERS);
    model.reset();
    popapState("none");
    createCard(userData);
    localStorage.setItem("users", JSON.stringify(userData));
});

btnOpen.addEventListener("click", () => {
    popapState("flex");
});

btnClose.addEventListener("click", () => {
    popapState("none");
});

overlay.addEventListener("click", () => {
    popapState("none");
});

function popapState(state) {
    popap.style.display = state;
}

function createCard(data) {
    const tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.lastname}</td>
            <td>${item.username}</td>
            <td>${item.id}</td>
            <td>${item.score}</td>
        `;
        tbody.appendChild(tr);
    });
}
