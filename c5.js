function stringManipulation(word){
    var vokal = 'aiueo';
    if (vokal.includes(word.charAt(0)) === true){
        return word;;
    }
    if(vokal.includes(word.charAt(0)) === false){
        return (word.slice(1) + word.charAt('') + 'nyo')
    }
}



console.log(stringManipulation('ayam')); //'ayam' 
console.log(stringManipulation('bebek')); //'ebekebnyo'
