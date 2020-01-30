const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'getRepo',
        desc: 'gets repo of user',
        builder: (yargs) => {
            return yargs.option('u', {
                alias: 'username',
                describe: 'find repos of given username'
            })
        },
        handler: (argv) => { app.getRepos(argv.username) }
    })
    .help('help')
    .argv