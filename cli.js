const webhook = require('./lib/main');
const { program } = require('commander');

program
  .name('webhook')
  .usage('[option] [args]')
  .option('-d, --debug', 'output extra debugging')
  .option('-i, --id <id>', 'set the webhook id')
  .option('-t, --token <token>', 'set webhook token')

program.parse(process.argv);
if (!)

const hook 
