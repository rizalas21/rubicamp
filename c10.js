const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini > ',
});

rl.prompt();

rl.on('line', (line) => {
        var vokal = 'aiueo'
        var teks = '';
        var kata = line.split(' ')
 
        for(let i = 0; i < kata.length; i++){
         if(vokal.includes(kata[i][0])){
             teks += kata[i] + ' ';
         } else{
             teks += kata[i].slice(1) + kata[i][0] + 'nyo' + ' ';
         }
    }
    console.log(`hasil konversi: ${teks}`)

     rl.prompt();

}).on('close', () => {
  console.log('Good bye!');
  process.exit(0);
});