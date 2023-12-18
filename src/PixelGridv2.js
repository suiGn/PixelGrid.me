/**
 * PixelGrid is a web component that allows for vectorized manipulation of pixels on a canvas.
 * @extends HTMLElement
 */
class PixelGrid extends HTMLElement {
    /**
     * Creates an instance of PixelGrid.
     */
    constructor() {
        super();
        this.width = this.getAttribute('width') || 777;
        this.height = this.getAttribute('height') || 333;
        this.pixelSize = this.getAttribute('pixel-size') || 1;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        const willReadFrequently = this.getAttribute('will-read-frequently') === "true";
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: willReadFrequently });
        this.imageData = this.ctx.createImageData(this.width, this.height);
        this.appendChild(this.canvas);
    }

    /**
     * Lifecycle callback that is invoked when the custom element is added to the DOM.
     */
    connectedCallback() {
        this.initialize();
        this.canvas.addEventListener('mousemove', (e) => this.showPixelInfo(e));
    }

    /**
     * Initializes the canvas with a default image and draws a grid overlay.
     */
    initialize() {
        // ... existing code ...
    }

    /**
     * Redraws the canvas and grid overlay.
     */
    redraw() {
        // ... existing code ...
    }

    /**
     * Resizes the canvas and image data to new dimensions.
     * @param {number} newWidth - The new width of the canvas.
     * @param {number} newHeight - The new height of the canvas.
     */
    resize(newWidth, newHeight) {
        // ... existing code ...
    }

    /**
     * Sets the image data from an array.
     * @param {Uint8ClampedArray} data - The image data array to set.
     */
    setData(data) {
        // ... existing code ...
    }

    /**
     * Draws a grid overlay for better visualization of pixels.
     */
    drawGridOverlay() {
        // ... existing code ...
    }

    /**
     * Shows information about the pixel under the mouse cursor.
     * @param {MouseEvent} e - The mouse event object.
     */
    showPixelInfo(e) {
        // ... existing code ...
    }

    /**
     * Retrieves the RGBA values of a pixel at a specific position.
     * @param {number} x - The x-coordinate of the pixel.
     * @param {number} y - The y-coordinate of the pixel.
     * @returns {number[]} An array containing the RGBA values.
     */
    getPixel(x, y) {
        // ... existing code ...
    }

    /**
     * Sets the RGBA values of a pixel at a specific position.
     * @param {number} x - The x-coordinate of the pixel.
     * @param {number} y - The y-coordinate of the pixel.
     * @param {number[]} rgba - An array containing the RGBA values to set.
     */
    setPixel(x, y, rgba) {
        // ... existing code ...
    }

    /**
     * Updates the image data from the canvas.
     */
    updateImageData() {
        // ... existing code ...
    }
}

// Export the PixelGrid class as a module
export default PixelGrid;
