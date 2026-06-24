let activeDeliveries = 0;
let mealsSaved = 0;
let ngosHelped = 0;

function postDonation() {
    let restaurant = document.getElementById("restaurant").value;
    let food = document.getElementById("food").value;
    let quantity = document.getElementById("quantity").value;
    let location = document.getElementById("location").value;

    let donationList = document.getElementById("donationList");

    donationList.innerHTML += `
        <div class="donation-card">
            <h3>${food}</h3>
            <p>Restaurant: ${restaurant}</p>
            <p>Quantity: ${quantity}</p>
            <p>Location: ${location}</p>
            <p class="status" style="color: orange;">
            Status: Available
            </p>

            <button onclick="claimDonation(this)">
                Claim Donation
            </button>
        </div>
    `;

    document.getElementById("restaurant").value = "";
    document.getElementById("food").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("location").value = "";
}

function claimDonation(button) {
    let card = button.parentElement;
    let status = card.querySelector(".status");

    status.innerHTML = "Status: Claimed";
    status.style.color = "blue";

    button.innerHTML = "Mark Delivered";
    button.onclick = function() {
        markDelivered(this);
    };

    let quantityText = card.querySelectorAll("p")[1].innerText;
    let quantity = parseInt(quantityText.replace("Quantity: ", ""));

    mealsSaved += quantity;
    document.getElementById("mealsSaved").innerText = mealsSaved;

    activeDeliveries += 1;
    document.getElementById("activeDeliveries").innerText = activeDeliveries;
}

function markDelivered(button) {
    let card = button.parentElement;
    let status = card.querySelector(".status");

    status.innerHTML = "Status: Delivered ✅";
    status.style.color = "green";
    let ngoDashboard =
    document.getElementById("ngoDashboard");

    ngoDashboard.innerHTML += `
    <div class="donation-card">
        <h3>Donation Received</h3>
        <p>${card.querySelector("h3").innerText}</p>
    </div>
`;
    button.disabled = true;
    button.innerHTML = "Delivered";

    activeDeliveries -= 1;
    document.getElementById("activeDeliveries").innerText = activeDeliveries;
    ngosHelped += 1;
    document.getElementById("ngosHelped").innerText = ngosHelped;
}
