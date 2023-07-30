function weirdMultiply(setence) {
  if(setence <= 9) {
    return setence;
  }

  var kangString = setence.toString();
  var hasil = 1;

  for(let i = 0; i < kangString.length; i++) {
    let integer = parseInt(kangString[i]);
    hasil *= integer;
  }
  return weirdMultiply(hasil);

}
console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
