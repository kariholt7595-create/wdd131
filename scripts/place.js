const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = document.lastModified;


const temperature = 24;

const windSpeed = 11;

const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChill.textContent = "N/A";
}