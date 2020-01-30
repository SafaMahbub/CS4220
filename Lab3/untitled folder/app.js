const
    quiz = require('./quiz'),
    yargs = require('yargs')

const flags = yargs.usage('$0: Usage [options]')
    .options('operators', {
        alias: 'o',
        describe: 'mathematical operations',
        array: true,
        default: ['+']
    })
    .options('min', {
        describe: 'min range of numbers',
        default: 0
    })
    .options('max', {
        describe: 'max range of numbers',
        default: 10
    })
    .help()
    .argv

quiz.run(flags)