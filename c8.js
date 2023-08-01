function pola(str) {
    var rizal = str.split(' ');
    var array1 = rizal[0];
    var array2 = rizal[2]
    var hasil = rizal[4];  

for (let i = 0; i < 10; i++){
        for (let j = 0; j < 20; j++) {
            if(array1.replace('#', i) * array2 == hasil.replace('#', j)){
                return [i,j];
            }           
        }
    }
}

console.log(pola('42#3 * 188 = 80#204')); //result : [8, 5]
console.log(pola('8#61 * 895 = 78410#5')); //result : [7, 9]