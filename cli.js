const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
 {
  name: 'text',
  message: 'Enter up to three letters for your logo:',
  type: 'input'
 },
 {
  name: 'textColor',
  message: 'Enter a color or hex code for your text:',
  type: 'input'
 },
 {
  name: 'shape',
  message: 'Pick a shape:',
  type: 'checkbox',
  choices: [
   'circle',
   'square',
   'triangle'
  ]
 },
  {
  name: 'shapeColor',
  message: 'Enter a color or hex code for your shape:',
  type: 'input'
 },
]).then(res => {

 if (res.shape == "circle") {
  fs.writeFile('newImage.svg', svgGeneratorCircle(res), (err) => {
   err ? console.error(err) : console.log('Success');
  })
 } else {
  console.log("It didn't proc for circle");
 }

  if (res.shape == "square") {
  fs.writeFile('newImage.svg', svgGeneratorSquare(res), (err) => {
   err ? console.error(err) : console.log('Success');
  })
 } else {
  console.log("It didn't proc for square");
 }

  if (res.shape == "triangle") {
  fs.writeFile('newImage.svg', svgGeneratorTriangle(res), (err) => {
   err ? console.error(err) : console.log('Success');
  })
 } else {
  console.log("It didn't proc for triangle");
 }

})

const svgGeneratorCircle = ({text, textColor, shapeColor, ...rest}) => {
 return `
 <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="#FFFFFF" />

  <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
 `
}

const svgGeneratorSquare = ({text, textColor, shapeColor, ...rest}) => {
 return `
  <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" x="50" fill="#FFFFFF" />
    <rect width="200" height="200" x="50" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
 `
}

const svgGeneratorTriangle = ({text, textColor, shapeColor, ...rest}) => {
 return `
  <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="#FFFFFF" />

  <polygon points="150 15, 275 180, 25 180" cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
 `
}