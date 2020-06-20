const { hook } = require('./lib/main');
const { program } = require('commander');
const readline = require('readline');

program
  .name('webhook')
  .usage('[option] [args]')
  .option('-d, --debug', 'output extra debugging')
  .option('-i, --id <id>', 'set the webhook id')
  .option('-t, --token <token>', 'set webhook token')

program.parse(process.argv);
if (!program.id) {
    console.error('please enter the webhook id')
    process.exit()
} else if (!program.token) {
    console.error('please enter the webhook token')
    process.exit()
} else if (!program.msg) {
    console.error('please enter a message')
    process.exit()
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    hook(program.id, program.token, answer)
  
    rl.close();
});
