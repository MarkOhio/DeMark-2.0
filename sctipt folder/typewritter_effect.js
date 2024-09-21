  // TYPEWRITTER EFFECT
  typewriter();

  function typewriter() {
    var texts = ["Welcome to", "This is another text!", "This is the last text!"]; // The array of texts to display
    var speed = 250; // The speed/duration of the effect in milliseconds
    var i = 0; // The index of the current character
    var j = 0; // The index of the current text
    var element = document.getElementById("typewriter"); // The element to display the text
  
    function type() {
      if (i < texts[j].length) {
        element.innerHTML += texts[j].charAt(i); // Add the current character to the element
        i++; // Increment the index
        setTimeout(type, speed); // Call the function again after a delay
      } else {
        // Reset the index and clear the element
        i = 0;
        element.innerHTML = "";
        // Increment the text index or loop back to the first text
        j = (j + 1) % texts.length;
        // Call the typewriter function again
        setTimeout(typewriter, 1000);
      }
    }
  
    type(); // Start the typing effect
  }