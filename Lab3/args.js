const args = process.argv
// console.log(args)

// The first element will be the Node.js executable path.
// The second element will be the path to the.js file being executed.
// The remaining elements will be any additional command line arguments.

// Syntax
// node file.j --help
// node file.js --operators + - * / --min 0 --max 10

args.splice(0, 2)
// console.log(args)

const command = args.shift()
console.log(command)

if (command === '--help')
    doFormatHelp()
else if (command === '--operators')
    doOperators(args)

function doFormatHelp() {
    console.log('alot of console logging')
}

function doOperators(args) {
    const min = args.findIndex(arg => arg === '--min')

    let operators = []
    if (min > -1)
        operators = args.splice(0, min)

    console.log(operators)
    console.log(args)
}
