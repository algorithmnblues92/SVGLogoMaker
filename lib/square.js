class Square {

 constructor(title, titleColor, shapeColor) {
  this.title = title;
  this.titleColor = titleColor;
  this.shapeColor = shapeColor;

 }


 render() {
  throw new Error('Square tag must be <rect width="200" height="200" x="50" fill="${shapeColor}" />')
 }

 titleRender() {
  throw new Error('title must have length of 3')
 }


 svgGeneratorSquare(title, titleColor, shapeColor) {
 if(title.length !== 3) {
  return title.titleRender();
 } else {
 return `
  <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" x="50" fill="#FFFFFF" />
    <rect width="200" height="200" x="50" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${titleColor}">${title}</text>

</svg>
 `
}
}
}

module.exports = Square;


