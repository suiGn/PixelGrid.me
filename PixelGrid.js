//PixelGrid.js
class PixelGrid extends HTMLElement {
  constructor() {
      super();

      this.width = this.getAttribute('width') || 300;
      this.height = this.getAttribute('height') || 150;
      this.pixelSize = this.getAttribute('pixel-size') || 1;
      // Initialize the canvas element
      this.canvas = document.createElement('canvas');
      this.canvas.width = this.width;
      this.canvas.height = this.height;

      this.ctx = this.canvas.getContext('2d');
      this.imageData = this.ctx.createImageData(this.width, this.height);

      // Append the canvas to the custom element
      this.appendChild(this.canvas);
  }

  connectedCallback() {
      // Called when the element is attached to the DOM
      this.initialize();
  }

  initialize() {
      // Fill the image data with transparent pixels
      for (let i = 0; i < this.imageData.data.length; i += 4) {
          this.imageData.data[i] = 0;     // R value
          this.imageData.data[i + 1] = 0; // G value
          this.imageData.data[i + 2] = 0; // B value
          this.imageData.data[i + 3] = 0; // A value (0 = transparent)
      }

      this.ctx.putImageData(this.imageData, 0, 0);
  }

  getPixel(x, y) {
      const index = (y * this.width + x) * 4;
      return [
          this.imageData.data[index],
          this.imageData.data[index + 1],
          this.imageData.data[index + 2],
          this.imageData.data[index + 3]
      ];
  }

  setPixel(x, y, [r, g, b, a]) {
      const index = (y * this.width + x) * 4;
      this.imageData.data[index] = r;
      this.imageData.data[index + 1] = g;
      this.imageData.data[index + 2] = b;
      this.imageData.data[index + 3] = a;

      // Update the canvas with the modified image data
      this.ctx.putImageData(this.imageData, 0, 0);
  }
}

// Register the custom element
customElements.define('pixel-grid', PixelGrid);