# Speechbubble Generator

v2.0

The speechbubble generator makes it easy to create speechbubbles with custom sizes as well as speechbubbles which adjust their height to the contained text.

It is based upon the p5.js library.

## Setup

Copy the provided files into the file system of your project. You'll have to link them in your html file like in the provided example file:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"
></script>
<script type="module" src="p5setup.js"></script>
<script type="module" src="sketch.js"></script>
```

To fit seamlessly into your html page, the font settings of the speechbubble text can be set within your css file. Just add the class `speechbubble` as follows:

```css
.speechbubble {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20pt;
  line-height: 1.2em;
}
```

## How to use it

The sketch.js file shows an example of how to use the speechbubble generator.

Speechbubbles can be created by creating instances of `Speechbubble` or `Textbubble`:

```javascript
let bubble = new Speechbubble(200, 200, 400, 300, "left", color("#000000"));

let txtBubble = new Textbubble(
  800,
  200,
  400,
  "This is an example.",
  "left",
  color("#000000")
);
```

The last two parameters are optional. If not set, the direction is set to `"right"` and the color to black by default. The color can be set to any value possible in p5.js, e.g. `color(255, 0, 0)`, `color("black")` or `color("#000000")`. HSL color mode is possible, too, if set in the `draw()` function in sketch.js.

## Upcoming

The next major update will be the possibility to create speechbubbles with HTML text instead of pure JavaScript text for better accessibility.
