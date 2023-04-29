const Square = require('../lib/square');

describe('Square', () => {
 describe('render', () => {
  it('should throw an error if called for square', () => {
   const square = new Square();
   expect(square.render).toThrowError('Square tag must be <rect width="200" height="200" x="50" fill="${shapeColor}" />')
  })
 })
})