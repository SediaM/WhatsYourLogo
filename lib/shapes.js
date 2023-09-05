const answers = require('../index.js');

class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = textColor;
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor} />`
    }
}

const tri = new Triangle(
    answers.text,
    answers.textColor,
    answers.shapeColor,
);
tri.text;
tri.textColor;
tri.shapeColor;



// let axample = new Shapes("aaa","blue","red")
// axample.text
// let two = new Shapes("bbb","blue","red")
// two.text


// let Tone = new Triangle("aaa", "red","green", 100)
// Tone.text
// Tone.size


class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill=${this.shapeColor} />`
    }

}

const cir = new Circle(
    answers.text,
    answers.textColor,
    answers.shapeColor,
);

cir.text;
cir.textColor;
cir.shapeColor;


class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<rect x="70" y="30" width="150" height="150" fill=${this.shapeColor}/>`
    }
}

const squ = new Square(
    answers.text,
    answers.textColor,
    answers.shapeColor,
);

squ.text;
squ.textColor;
squ.shapeColor;

module.exports = Shapes