const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list'); // Assuming you have a book list container

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const searchTerm = searchInput.value.toLowerCase();
  filterBooks(searchTerm);
});

function filterBooks(searchTerm) {
  const bookCards = document.querySelectorAll('.book-card'); // Assuming your book cards have the 'book-card' class

  bookCards.forEach(bookCard => {
    const title = bookCard.querySelector('h3').textContent.toLowerCase();
    const description = bookCard.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      bookCard.style.display = 'block'; // Show matching books
    } else {
      bookCard.style.display = 'none'; // Hide non-matching books
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Get references to filter elements
  const filterForm = document.getElementById("filter-form");
  const filterButton = document.getElementById("filter-button");

  // Attach event listener to the filter button
  filterButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get selected values from filter inputs
    const category = document.getElementById("category-filter").value;
    const author = document.getElementById("author-filter").value;
    // ... Get other filter values

    // Perform filtering logic based on selected values
    // You can manipulate the book listing based on the filter values
    
    // Example: Display an alert with the selected values
    alert(`Selected Category: ${category}\nSelected Author: ${author}`);
  });
});
