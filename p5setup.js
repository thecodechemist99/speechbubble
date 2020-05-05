/* setup for p5.js */

let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

function setup() {
  let myCanvas = sketch.createCanvas(windowWidth, windowHeight);
  myCanvas.class("speechbubble");
  frameRate(30);

  // set text properties according to css

  let font = myCanvas.style("font-family");
  let fontSize = Number(myCanvas.style("font-size").replace("px", ""));
  let fontLeading = Number(myCanvas.style("line-height").replace("px", ""));

  textFont(font);
  textSize(fontSize);
  textLeading(fontLeading);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
  clear();
}
window.addEventListener("resize", windowResized);
