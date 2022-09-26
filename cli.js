const yargs = require('yargs/yargs');

const app = require('./app.js');

yargs(process.argv.slice(2))
    .usage('$0: Usage <cmd> [options]')
    .command(
        // command
        'search <title>',
        // command description
        'find a specific manga by title',
        // builder
        (yargs) => {
            return yargs
                .positional('title', {
                    describe: 'title of manga user is searching for',
                    type: 'string',
                })

        },
        // handler
        (args) => {
            app.search(args)
        }
    )
    .help().argv;