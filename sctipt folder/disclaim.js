 // Get the search input and results container
 const searchInput = document.getElementById('search-input');
 const searchResults = document.getElementById('search-results');
 const searchContainer = document.getElementById('search-container');
 
 // Get all the H2 tags inside the div with the ID "adstxt"
 const h2Tags = searchContainer.querySelectorAll('#adstxt h2');
 
 // Create an array to store the H2 tag texts
 const h2Texts = Array.from(h2Tags).map(h2 => h2.textContent.toLowerCase());
 
 // Add an event listener to the search input
 searchInput.addEventListener('input', () => {
   const searchTerm = searchInput.value.toLowerCase();
   const filteredH2Texts = h2Texts.filter(text => text.includes(searchTerm));
 
   // Clear the search results container
   searchResults.innerHTML = '';
 
   // Create a list item for each filtered H2 tag text
   filteredH2Texts.forEach((text, index) => {
     const listItem = document.createElement('LI');
     listItem.textContent = text;
     listItem.addEventListener('click', () => {
       // Scroll to the corresponding H2 tag when clicked
       h2Tags[index].scrollIntoView({ behavior: 'smooth' });
      
       // Close the search results container
       searchResults.style.display = 'none';
     });
     searchResults.appendChild(listItem);
   });
 
   // Show the search results container if there are filtered results
   if (filteredH2Texts.length > 0) {
     searchResults.style.display = 'block';
   } else {
     searchResults.style.display = 'none';
   }
 });