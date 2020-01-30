const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'draw',
        desc: 'draws 5 cards from a shuffled deck',
        handler: (argv) => { app.draw(true, 5) }
    })
    .command({
        command: 'play',
        desc: 'draws 5 cards from a shuffled deck',
        handler: (argv) => { app.play(true, 5) }
    })
    .help('help')
    .argv