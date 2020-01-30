const inquirer = require('inquirer')

module.exports.run = options => {
    const quiz = new Quiz(options)
    quiz.init()
}

class Quiz {
    constructor(options) {
        this.min = options.min
        this.max = options.max

        this.operators = options.operators
    }

    init() {
        const
            n1 = Math.floor(Math.random() * this.max) + this.min,
            n2 = Math.floor(Math.random() * this.max) + this.min,
            op = this.operators[Math.floor(Math.random() * this.operators.length)]

        this.question = { n1, n2, op }

        this.displayQuiz()
    }

    displayQuiz() {
        inquirer.prompt([{
            type: 'input',
            name: 'answer',
            message: `${this.question.n1} ${this.question.op} ${this.question.n2} =`,
            filter: (input) => {
                return parseInt(input)
            }
        }]).then((input) => {
            this.isRight(input.answer)
        })
    }

    isRight(answer) {
        const solution = this.getSolution(this.question)
        if (answer === solution)
            console.log('---- YAY! ----')
        else
            console.log('Sorry! The answer is ' + solution)
    }

    getSolution() {
        switch (this.question.op) {
            case '+':
                return this.question.n1 + this.question.n2
                break
            case '-':
                return this.question.n1 - this.question.n2
                break
            default:
                console.log('no method')
        }
    }
}