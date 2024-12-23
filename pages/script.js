  const headerline = document.getElementById("headerline");
  const viewportHeight = window.innerHeight;
  const scrollLimit = 0.99 * viewportHeight;

  // Add an event listener for scroll event
  window.addEventListener("scroll", function() {
      // Check if page has been scrolled by at least 1 pixel
      if (window.scrollY > 0) {
        headerline.style.backgroundColor = "black"; // Change to desired color
      } else {
        headerline.style.backgroundColor = "transparent";  // Original color
      }

      if (scrollY > scrollLimit) {
        headerline.style.opacity = "0"; // Hide the div by making it transparent
        headerline.style.pointerEvents = "none"; // Disable interaction when hidden
      } else {
        headerline.style.opacity = "1";  // Show the div
        headerline.style.pointerEvents = "auto"; // Re-enable interaction
    }
    
  });
  

  



  document.addEventListener('DOMContentLoaded', () => {

    // adding header 
    fetch("header.html")
    .then(response => {
      return response.text();
    })
    .then(data => {
      document.querySelector("header").innerHTML = data;
    })
    // error catch
    .catch(error => { 
      console.error('Error:', error);
    });
    



    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    // Function to toggle between light and dark themes
    themeToggleButton.addEventListener('click', () => {
        bodyElement.classList.toggle('light-theme');
        // Update the button text based on the current theme
        if (bodyElement.classList.contains('light-theme')) {
            themeToggleButton.textContent = 'Back to Dark Mode';
        } else {
            themeToggleButton.textContent = 'freak my eyes pls';
        }
    });
    
  });

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("side-menu").style.width = "0"; // Close the side menu
});


function disableScrolling(){ // Disable scrolling
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){ // Enable scrolling
  window.onscroll=function(){};
}


document.getElementById("modal-button1").addEventListener("click", function () {
  document.getElementById("modal1").style.display = "block"; // Open the modal
  disableScrolling(); // Disable scrolling
});

document.getElementById("modal1").addEventListener("click", function () {
  document.getElementById("modal1").style.display = "none"; // Close the modal
  enableScrolling(); // Enable scrolling
});

document.getElementById("modal-button2").addEventListener("click", function () {
  document.getElementById("modal2").style.display = "block"; // Open the modal
  disableScrolling(); // Disable scrolling
});

document.getElementById("modal2").addEventListener("click", function () {
  document.getElementById("modal2").style.display = "none"; // Close the modal
  enableScrolling(); // Enable scrolling
});

document.getElementById("modal-button3").addEventListener("click", function () {
  document.getElementById("modal3").style.display = "block"; // Open the modal
  disableScrolling(); // Disable scrolling
});

document.getElementById("modal3").addEventListener("click", function () {
  document.getElementById("modal3").style.display = "none"; // Close the modal
  enableScrolling(); // Enable scrolling
});