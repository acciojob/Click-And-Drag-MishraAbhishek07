const items = document.querySelector('.items');
let isMouseDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - items.offsetLeft; // Get the initial position of the mouse
  scrollLeft = items.scrollLeft; // Get the current scroll position
  items.classList.add('active'); // Add active class when dragging starts
});

items.addEventListener('mouseleave', () => {
  isMouseDown = false;
  items.classList.remove('active'); // Remove active class when mouse leaves
});

items.addEventListener('mouseup', () => {
  isMouseDown = false;
  items.classList.remove('active'); // Remove active class when mouse is released
});

items.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return; // Do nothing if the mouse is not pressed down
  const x = e.pageX - items.offsetLeft; // Calculate the current mouse position
  const walk = (x - startX) * 2; // Calculate how far the mouse has moved
  items.scrollLeft = scrollLeft - walk; // Update the scroll position based on mouse movement
});
