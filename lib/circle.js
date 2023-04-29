class Circle {

 constructor(title, titleColor, shapeColor) {
  this.title = title;
  this.titleColor = titleColor;
  this.shapeColor = shapeColor;
 }

 render() {
  throw new Error('Circle tag must be <circle cx="150" cy="100" r="80" fill="${shapeColor}" />')
 }

 svgGeneratorCircle(title, titleColor, shapeColor) {
 if(title.length !== 3) {
  console.log('title must have length of 3')
 } else {
 return `
 <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="#FFFFFF" />

  <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${titleColor}">${title}</text>

</svg>
 `
 }
}

}

module.exports = Circle;
