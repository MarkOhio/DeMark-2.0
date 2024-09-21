// Get the button element
var button = document.getElementById("cntbutton");

// Define a function to animate the button
function animateButton() {
  // Change the button's width and height
  button.style.width = "180px";
  button.style.height = "90px";

  // Set a timeout to restore the button's size
  setTimeout(function() {
    button.style.width = "200px";
    button.style.height = "100px";
  }, 100);
}

// Add an event listener for the click event
button.addEventListener("click", animateButton);