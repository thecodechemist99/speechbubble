/* setup for p5.js */

let sketch = new p5();
var width = windowWidth;
var height = windowHeight;

// let fontSize;
// let fontLeading;

function setup() {
  let myCanvas = sketch.createCanvas(windowWidth, windowHeight);
  frameRate(30);

  // set text properties according to css
  myCanvas.class("speechbubble");
  sketch.font = myCanvas.style("font-family");
  sketch.fontSize = Number(myCanvas.style("font-size").replace("px", ""));
  sketch.fontLeading = Number(myCanvas.style("line-height").replace("px", ""));

  textFont(sketch.font);
  textSize(sketch.fontSize);
  textLeading(sketch.fontLeading);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
  clear();
}
window.addEventListener("resize", windowResized);
