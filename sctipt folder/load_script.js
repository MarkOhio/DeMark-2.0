// Simulate the loading of the website
let progress = 0;
const loadingBar = document.querySelector('.loading-bar');
const loadingScreen = document.getElementById('loading-screen');
const content = document.getElementById('content');

// Function to simulate loading progress
function simulateLoading() {
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval); // Stop the loading process once it reaches 100%
      loadingScreen.style.display = 'none'; // Hide the loading screen
      content.style.display = 'block'; // Show the content
    } else {
      progress += 1; // Increase the progress
      loadingBar.style.width = progress + '%'; // Update the width of the loading bar
    }
  }, 50); // Adjust this value to control the speed of loading
}

// Wait for the entire page to load
window.addEventListener('load', function () {
  simulateLoading();
});