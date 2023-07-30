    function setencesManipulation(setence){
       var vokal = 'aiueo'
       var teks = '';
       var kata = setence.split(' ')

       for(let i = 0; i < kata.length; i++){
        if(vokal.includes(kata[i][0])){
            teks += kata[i] + ' ';
        } else{
            teks += kata[i].slice(1) + kata[i][0] + 'nyo' + ' ';
        }
       }
       return teks.trim();
    }

    console.log(setencesManipulation('ibu pergi ke pasar bersama aku'));