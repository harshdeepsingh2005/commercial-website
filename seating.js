document.addEventListener("DOMContentLoaded", function () {
    const seatMap = document.getElementById("seat-map");
    const selectedSeatsList = document.getElementById("selected-seats-list");
    const foodPacksContainer = document.getElementById("food-packs-container");
    const foodList = document.querySelectorAll(".food-list-item");
    const totalPriceElement = document.getElementById("total-price");
    const proceedToPaymentButton = document.getElementById("proceed-to-payment");

    let totalFoodPrice = 0;

    const rows = 10;
    const seatsPerRow = 13; 

    for (let row = 1; row <= rows; row++) {
for (let seat = 1; seat <= seatsPerRow; seat++) {
const seatElement = document.createElement("div");
seatElement.className = "seat";
seatElement.setAttribute("data-row", row);
seatElement.setAttribute("data-seat", seat);
seatElement.innerHTML = `<img src="seat_unselected.png" alt="Seat ${row}-${seat}" />`;

seatElement.addEventListener("click", function () {
    toggleSeatSelection(seatElement);
});

seatMap.appendChild(seatElement);
}
}

function toggleSeatSelection(seatElement) {
seatElement.classList.toggle("selected");

// Change the image source based on the selected state
const imageSource = seatElement.classList.contains("selected") ? "seat_selected.png" : "seat_unselected.png";
seatElement.querySelector("img").src = imageSource;

const selectedSeats = document.querySelectorAll(".seat.selected");
selectedSeatsList.innerHTML = "";

selectedSeats.forEach((selectedSeat) => {
const listItem = document.createElement("li");
listItem.textContent = `Seat ${selectedSeat.getAttribute("data-row")}-${selectedSeat.getAttribute("data-seat")}`;
selectedSeatsList.appendChild(listItem);
});

updateTotalPrice();
}
function proceedToCheckout() {
// Add logic to navigate to the checkout page
alert("Redirecting to Checkout Page"); 
window.location.href = 'checkout.html';
// alert("Redirecting to Checkout Page"); // Replace with actual navigation code
}

    function updateTotalPrice() {
        totalFoodPrice = Array.from(document.querySelectorAll(".food-list-item.selected"))
            .map(foodItem => parseFloat(foodItem.getAttribute("data-price")))
            .reduce((total, price) => total + price, 0);

        totalPriceElement.textContent = totalFoodPrice.toFixed(2);
    }

    foodList.forEach((foodItem) => {
        foodItem.addEventListener("click", function () {
            foodItem.classList.toggle("selected");
            updateTotalPrice();
        });
    });

    // Show food packs list when clicked
    document.getElementById("proceed-to-payment").addEventListener("click", function () {
        foodPacksContainer.style.display = "block";
    });

    // Hide food packs list when clicked outside
    document.addEventListener("click", function (event) {
        if (!foodPacksContainer.contains(event.target) && event.target !== document.getElementById("proceed-to-payment")) {
            foodPacksContainer.style.display = "none";
        }
    });

    proceedToPaymentButton.addEventListener("click", function () {
        const selectedSeats = document.querySelectorAll(".seat.selected");
        const selectedFoodPacks = document.querySelectorAll(".food-list-item.selected");

        // You can implement the logic to proceed to payment with the selected seats and food packs.
        console.log("Selected Seats:", selectedSeats);
        console.log("Selected Food Packs:", selectedFoodPacks);
        console.log("Total Price:", totalFoodPrice);
    });
});