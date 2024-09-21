 // CONTENT SECTION SPIN AND AUDIO
  // Get all the square elements
  const squares = document.querySelectorAll(".square");

  // Create a new audio element
  const audio = document.createElement("audio");

  // Set the source of the audio element to the sound file
  // You can change the file name or the URL to your own sound file
  audio.src = "pic/pop.mp3";

  // Loop through each square element
  squares.forEach(square => {
    // Add a hover event listener
    square.addEventListener("mouseover", () => {
      // Add the active class on hover
      square.classList.add("active");
    });
    // Add a mouseout event listener
    square.addEventListener("mouseout", () => {
      // Remove the active class on mouseout
      square.classList.remove("active");
    });
    // Add a click event listener
    square.addEventListener("click", () => {
      // Toggle the active class on click
      square.classList.toggle("active");
      // Play the sound on click
      audio.play();
    });
  });