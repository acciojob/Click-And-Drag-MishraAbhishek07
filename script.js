// Your code here.
// Get the items container
const items = document.querySelector('.items');

// Variables to track mouse position
let isMouseDown = false;
let startX, scrollLeft;

// Function to start dragging
items.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - items.offsetLeft; // Get the starting position of the mouse
  scrollLeft = items.scrollLeft; // Get the initial scroll position of the container
  items.classList.add('active'); // Add active class to show the drag effect
});

// Function to drag the container
items.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return; // If mouse is not down, don't do anything
  const x = e.pageX - items.offsetLeft; // Calculate the mouse position
  const walk = (x - startX) * 2; // Calculate how much the mouse moved
  items.scrollLeft = scrollLeft - walk; // Update the scroll position of the container
});

// Function to stop dragging
items.addEventListener('mouseup', () => {
  isMouseDown = false;
  items.classList.remove('active'); // Remove the active class
});

// If the mouse leaves the container while dragging
items.addEventListener('mouseleave', () => {
  isMouseDown = false;
  items.classList.remove('active'); // Remove the active class
});
