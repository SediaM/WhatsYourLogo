const inquirer = require('inquirer');
const fs = require('fs/promises');
const Triangle = require('./lib/shapes');
const Circle = require('./lib/shapes');
const Square = require('./lib/shapes');


function makeSVG(answers) {
    if (answers.Shape === "Triangle") {
        return Triangle;
    }
    if (answers.Shape === "Circle") {
        return Circle;
    }
    if (answers.Shape === "Square") {
        return Square;
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your logo text?',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What is the color of your logo text?',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape is the shape of your logo?',
            name: 'Shape',
            choices: ['Triangle', 'Cicle', 'Square'],
        },
        {
            type: 'input',
            message: 'What is the color of the logo shape?',
            name: 'shapeColor',
        }
    ])
    .then((answers) => {
        const svgContent = makeSVG(answers);

        fs.writeFile('./lib/shapes.js', svgContent)

    })
    .then(() => console.log('File Created!'))
    .catch((err) => console.error(err));