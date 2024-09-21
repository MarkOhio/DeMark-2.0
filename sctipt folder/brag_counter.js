let count = 5999;
  const counterElement = document.getElementById('count');
  
  setInterval(() => {
    count++;
    counterElement.textContent = count.toString();
  }, 3000); // increments every 3 second (3000ms)