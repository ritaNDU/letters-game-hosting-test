// Get the canvas element by its ID
const canvas = document.getElementById("letter_drawing");

// Check if the canvas is supported
if (canvas.getContext) {
  // Get the 2D rendering context
  const ctx = canvas.getContext("2d");
  let isDrawing = false;

  // Set the initial drawing style
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";

  // Add event listeners to track mouse/touch events
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("touchstart", startDrawing);
  canvas.addEventListener("touchend", stopDrawing);
  canvas.addEventListener("touchcancel", stopDrawing);
  canvas.addEventListener("touchmove", draw);

  function startDrawing(event) {
    isDrawing = true;
    draw(event);
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function draw(event) {
    if (!isDrawing) return;
    
    let x, y;

    // Determine the coordinates based on mouse or touch event
    if (event.touches) {
      // Touch event
      x = event.touches[0].clientX - canvas.offsetLeft;
      y = event.touches[0].clientY - canvas.offsetTop;
    } else {
      // Mouse event
      x = event.clientX - canvas.offsetLeft;
      y = event.clientY - canvas.offsetTop;
    }

    // Draw a point at the coordinates
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
} else {
  // Canvas is not supported
  console.error("Canvas is not supported in this browser.");
}
