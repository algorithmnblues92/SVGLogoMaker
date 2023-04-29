const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./svg');

class CLI {

 constructor () {
  this.title = '';
  this.titleColor = '';
  this.shape = '';
  this.shapeColor = '';
 }

 run() {
  return inquirer.prompt([
   {
   type: 'input',
   name: 'title',
   message: 'Enter three letters or numbers:'
   },
   {
   name: 'titleColor',
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
   }
  ]).then(({ title, titleColor, shape, shapeColor }) => {

    return writeFile(
     join(__dirname, '..', 'newImage.svg'),
     createSVG(title, titleColor, shape, shapeColor)
    );
  }
  )


 }
}

module.exports = CLI;