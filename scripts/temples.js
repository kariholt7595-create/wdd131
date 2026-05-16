const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = document.lastModified;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
}); 