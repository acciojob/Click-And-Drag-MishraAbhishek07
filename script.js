// Function to handle the drag operation
let isMouseDown = false;
let startX;
let scrollLeft;

const itemsContainer = document.querySelector('.items');

// Mouse down event: This starts the drag operation
itemsContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - itemsContainer.offsetLeft; // Calculate the starting X position
  scrollLeft = itemsContainer.scrollLeft; // Store the initial scroll position
  itemsContainer.classList.add('active'); // Optional: Add the active class for styling
});

// Mouse leave event: In case the mouse leaves the area while dragging
itemsContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
  itemsContainer.classList.remove('active');
});

// Mouse up event: Ends the drag operation
itemsContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
  itemsContainer.classList.remove('active');
});

// Mouse move event: Handles the actual dragging
itemsContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return; // If mouse is not down, don't do anything
  
  const x = e.pageX - itemsContainer.offsetLeft; // Current X position
  const walk = (x - startX) * 2; // Calculate the movement distance, 2x speed for better effect
  itemsContainer.scrollLeft = scrollLeft - walk; // Update the scroll position
});
