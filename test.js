function sum() {
    return(Object.values(arguments).reduce((hasil,value) => hasil + value))
}

console.log(sum(1,2,7))
console.log(sum(1,4))
console.log(sum(11))
console.log(sum(10,3,6,7,9))