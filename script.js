function setupLoveButtons() {
      const buttons = document.querySelectorAll(".content-love-btn");
      const count = document.getElementById("count");
      let total = 0;

      buttons.forEach(btn => {
        let liked = false;

        btn.addEventListener("click", function() {
          liked = !liked;

          btn.textContent =  "❤️" ;

          total++;
          count.textContent = total;
        });
      });
    }
    setupLoveButtons();

const coinDisplay = document.querySelector(".coin-count");
let coins = 100; // starting coins
const callHistory = document.getElementById("callHistory");

document.querySelectorAll(".call").forEach(btn => {
  btn.addEventListener("click", () => {
    // Check coins before subtracting
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Get service details from data attributes
    const serviceName = btn.dataset.name;
    const serviceNumber = btn.dataset.number;

    // Subtract 20 coins
    coins -= 20;
    coinDisplay.textContent = coins;

    // Alert
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to call history
    if (callHistory.querySelector("li.text-gray-400")) {
      callHistory.innerHTML = ""; // remove "No calls yet..."
    }
    const li = document.createElement("li");
    li.textContent = `${serviceName} - ${serviceNumber}`;
    callHistory.appendChild(li);
  });
});
