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
const clearHistoryBtn = document.querySelector(".btn.btn-xs.btn-error");

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

    // Get current time
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // convert 0-23 to 1-12
    const timeString = `${hours}:${minutes} ${ampm}`;

    // Alert
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to call history
    if (callHistory.querySelector("li.text-gray-400")) {
      callHistory.innerHTML = ""; // remove "No calls yet..."
    }
    const li = document.createElement("li");
    li.textContent = `${serviceName} - ${serviceNumber} (${timeString})`;
    li.classList.add("text-gray-700", "font-medium");
    callHistory.prepend(li); // add to top
  });
});

// Clear History functionality
clearHistoryBtn.addEventListener("click", () => {
  callHistory.innerHTML = '<li class="text-gray-400 italic">No calls yet...</li>';
});


let copyCount = 0;
const copyCounterBtn = document.querySelector("header .btn-success"); // "2 Copy" button in header

document.querySelectorAll(".btn-outline").forEach(btn => {
  btn.addEventListener("click", () => {
    // Find the number inside the same card
    const number = btn.closest(".bg-white").querySelector("p.text-2xl").textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
      copyCount++;
      alert(`Number ${number} copied! Total copies: ${copyCount}`);
      copyCounterBtn.textContent = copyCount + " Copy";
    });
  });
});