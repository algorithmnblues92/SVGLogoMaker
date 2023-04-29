const Circle = require('../lib/circle');

describe('Circle', () => {
 describe('render', () => {
  it('should throw an error if called for circle', () => {
   const circle = new Circle();
   expect(circle.render).toThrowError('Circle tag must be <circle cx="150" cy="100" r="80" fill="${shapeColor}" />')
  })
 })
})