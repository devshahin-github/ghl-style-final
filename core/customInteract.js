export function setupInteractions() {
  const previewScreen = document.getElementById("previewScreen");
  const gridCanvas = document.getElementById("gridCanvas");
  const ctx = gridCanvas.getContext("2d");

  // Default Scale and Position
  let scale = 0.8; // 🔥 Default zoom level
  let position = { x: -184.001, y: 109.333 }; // 🔥 Default position

  // Ensure that the transform stays consistent
  function setDefaultView() {
      previewScreen.style.transform = `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`;
  }
  setDefaultView(); // Apply default view instantly
  drawGrid(); // Draw grid initially

  // 🟢 Function to Draw Dynamic Grid
  function drawGrid() {
      const gridSize = 50 * scale; // Adjust grid size based on zoom
      const width = (gridCanvas.width = window.innerWidth);
      const height = (gridCanvas.height = window.innerHeight);

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(0, 0, 0, 0.03)"; // Light grid color
      ctx.lineWidth = .4;

      // Draw vertical grid lines
      for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
      }

      // Draw horizontal grid lines
      for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
      }
  }

  // 🟢 Enable dragging
  interact(previewScreen).draggable({
      listeners: {
          move(event) {
              position.x += event.dx;
              position.y += event.dy;
              updateTransform();
          },
      },
  });

  // 🟢 Fix: Zooming only inside `.Preview-Screen`
  previewScreen.addEventListener("wheel", function (event) {
      event.preventDefault();
      event.stopPropagation(); // Stop wheel event from affecting other elements

      const zoomIntensity = 0.1;
      if (event.deltaY < 0) {
          scale = Math.min(scale + zoomIntensity, 1.5); // Max zoom: 1.5x
      } else {
          scale = Math.max(scale - zoomIntensity, 0.5); // Min zoom: 0.5x
      }
      updateTransform();
      drawGrid(); // Update grid with new scale
  });

  // 🟢 Function to apply transform updates
  function updateTransform() {
      previewScreen.style.transform = `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`;
  }
}
