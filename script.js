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

 

