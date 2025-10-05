//your code here!
const list = document.getElementById("infi-list");
let count = 1;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Add 10 list items initially
addItems(10);

// Event listener to detect when user reaches the end
window.addEventListener("scroll", () => {
  // Check if user has scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 more items
  }
});

