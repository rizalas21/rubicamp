const fs = require("fs");
const readline = require("readline")
const data = fs.readFileSync("data.json", "utf-8")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: ',
});

const obj = JSON.parse(data);
let penampung = 0;

obj.push({"definition":"Sebutkan kota yang memiliki julukan kota Intan?", "term":"Garut"});
fs.writeFileSync("data.json", JSON.stringify(obj));

console.log("Selamat datang di permainan Tebak Kata, silahkan isi jawabannya dengan benar ya! \n")
console.log("pertanyaan:", obj[penampung].definition);

rl.prompt();

rl.on('line', (isi) => {
        if(isi.toString().toLowerCase() == obj[penampung].term.toLowerCase()) {
            console.log('Selamat anda benar! \n')
            penampung++;

            if(penampung == obj.length) {
                console.log("Hore Anda Menang!")
                rl.close() 
            }
            console.log('pertanyaan', obj[penampung].definition);
        } else {
            console.log('Wkwkwkwk, Anda kurang beruntung! \n')
        }

     rl.prompt();

}).on('close', () => {
  process.exit(0);
});