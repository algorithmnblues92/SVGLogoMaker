class Triangle {

 constructor(title, titleColor, shapeColor) {
  this.title = title;
  this.titleColor = titleColor;
  this.shapeColor = shapeColor;

 }


 render() {
  throw new Error('Triangle tag must be <polygon points="150 15, 275 180, 25 180" cx="150" cy="100" r="80" fill="${shapeColor}" />')
 }

 titleRender() {
  throw new Error('title must have length of 3')
 }

 svgGeneratorTriangle(title, titleColor, shapeColor) {
 if(title.length !== 3) {
  return title.titleRender();
 } else {
 return `
  <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="#FFFFFF" />

  <polygon points="150 15, 275 180, 25 180" cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${titleColor}">${title}</text>

</svg>
 `
}
}

}


module.exports = Triangle;
