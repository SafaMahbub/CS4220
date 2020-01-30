const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'gets repos of user searched',
        builder: (yargs) => {
            return yargs.option('u', {
                alias: 'username',
                describe: 'find repos of given username'
            })
        },
        handler: (argv) => { app.search(argv.username) }
    })
    .help('help')
    .argv