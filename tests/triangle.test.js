const Triangle = require('../lib/triangle');

describe('Triangle', () => {
 describe('render', () => {
  it('should throw an error if called for triangle', () => {
   const triangle = new Triangle();
   expect(triangle.render).toThrowError('Triangle tag must be <polygon points="150 15, 275 180, 25 180" cx="150" cy="100" r="80" fill="${shapeColor}" />')
  })
 })
})