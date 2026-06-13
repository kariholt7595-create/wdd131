const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = document.lastModified;

const calculatorForm = document.getElementById("points-calculator");


const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});


const redemptionRatings = [
    {
        min: 2,
        message: "Excellent redemption! This gives you much more value than basic cash back."
    },
    {
        min: 1.5,
        message: "Good redemption! This is better than basic cash back."
    },
    {
        min: 0,
        message: "Lower redemption value. Cash back may be just as useful here."
    }
];

function getRedemptionRating(valuePerPoint) {
    return redemptionRatings.find((rating) => valuePerPoint >= rating.min);
}

function displayCalculatorResults(cashPrice, pointsNeeded, rating) {
    const cashBackValue = pointsNeeded * 0.01;
    const extraValue = cashPrice - cashBackValue;
    const valuePerPoint = (cashPrice / pointsNeeded) * 100;

    document.getElementById("calculator-results").innerHTML = `
        <h3>Your Comparison</h3>
        <p>Cash Back Value: $${cashBackValue.toFixed(2)}</p>
        <p>Travel Redemption Value: $${cashPrice.toFixed(2)}</p>
        <p>Extra Value from Travel: $${extraValue.toFixed(2)}</p>
        <p>Value Per Point: ${valuePerPoint.toFixed(2)}¢</p>
        <p><strong>${rating.message}</strong></p>
    `;
}

if (calculatorForm) {
    calculatorForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const cashPrice = Number(document.getElementById("cash-price").value);
        const pointsNeeded = Number(document.getElementById("points-needed").value);

        const valuePerPoint = (cashPrice / pointsNeeded) * 100;
        const rating = getRedemptionRating(valuePerPoint);

        displayCalculatorResults(cashPrice, pointsNeeded, rating);

        localStorage.setItem("lastCashPrice", cashPrice);
        localStorage.setItem("lastPointsNeeded", pointsNeeded);
    });
}