const Shapes = require('../shapes.js');

const triangle = new Triangle();
triangle.setColor('');
expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor} />`);


const circle = new Circle();
circle.setColor('');
expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill=${this.shapeColor} />`);


const square = new Square();
square.setColor('');
expect(square.render()).toEqual(`<rect x="70" y="30" width="150" height="150" fill=${this.shapeColor}/>`);


