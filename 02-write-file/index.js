const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const fs = require('fs');
const writeStream = fs.createWriteStream('02-write-file/text2.txt');

console.log('введите строчку');
rl.on('line', (answer) => {
  if (answer == 'exit') {
    exitPro();
  }
  writeStream.write(answer);
});

rl.on('SIGINT', () => {
  exitPro();
});

function exitPro() {
  console.log('\n bye for now sweetie');
  rl.close();
}
