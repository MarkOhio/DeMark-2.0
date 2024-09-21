// HERO SECTION SLIDE
var slides = document.querySelectorAll(".slide"); // Get all the slide elements
var slideBtns = document.querySelectorAll(".slide-btn"); // Get all the input elements
var index = 0; // The index of the current slide
var interval; // The variable to store the interval function

function carousel() {
  // The function to display the slides
  for (var i = 0; i < slides.length; i++) {
    // Loop through the slides
    slides[i].style.opacity = 0; // Hide all the slides
    slideBtns[i].checked = false; // Uncheck all the input elements
  }
  index++; // Increment the index
  if (index > slides.length) {
    // If the index is greater than the number of slides
    index = 1; // Reset the index to 1
  }
  slides[index - 1].style.opacity = 1; // Show the current slide
  slideBtns[index - 1].checked = true; // Check the current input element
}

function setInt() {
  // The function to set the interval
  clearInterval(interval); // Clear the previous interval
  interval = setInterval(carousel, 8000); // Set a new interval
}

setInt(); // Call the setInt function