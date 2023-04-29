const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

function createSVG (title, titleColor, shape, shapeColor ) {
 // return (`${shape}.prototype.svgGenerator${shape}(title, titleColor, shapeColor)`)

  if (shape == 'circle') {
 return Circle.prototype.svgGeneratorCircle(title, titleColor, shapeColor);
 }
  if (shape == 'square') {
 return Square.prototype.svgGeneratorSquare(title, titleColor, shapeColor);
 }``
  if (shape == 'triangle') {
 return Triangle.prototype.svgGeneratorTriangle(title, titleColor, shapeColor);
 }
}

module.exports = { createSVG };

// function createSVG (title, titleColor, shapeColor, shape) {
//  if (shape == 'circle') {
//  return Circle.prototype.svgGeneratorCircle(title, titleColor, shapeColor);
//  }
//   if (shape == 'square') {
//  return Square.prototype.svgGeneratorSquare(title, titleColor, shapeColor);
//  }``
//   if (shape == 'triangle') {
//  return Triangle.prototype.svgGeneratorTriangle(title, titleColor, shapeColor);
//  }
// }