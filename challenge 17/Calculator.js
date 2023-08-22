export const PI = 22 / 7;
export default class calculator {
    constructor(x) {
        this.x = x || 1
    }

    add(value) {
        this.x += value
        return this
    }

    subtract(value) {
        this.x -= value
        return this
    }
 
    divide(value) {
        this.x /= value
        return this
    }
    // tambahkan methode lain yang diperlukan
    
    multiply(value) {
        this.x *= value
        return this
    }

    square(value) {
        this.x = Math.pow(this.x, 2)
        return this
    }

    exponent(value) {
        this.x = Math.pow(this.x, value)
        return this
    }

    squareRoot(value) {
        this.x = Math.sqrt(this.x)
        return this
    }

    result() {
        console.log(this.x)
        return this
    }

}

// const calc = new calculator()

// calc.add(10).subtract(5).result() // 1 + 10 - 5 = 6
// calc.add(3).multiply(4).divide(6).result() // 6 + 3 * 4 / 6 = 6
// calc.x = 7 // set jari jari 7
// console.log(`nilai sekarang : ${calc.x}`) 
// calc.multiply(2).multiply(PI).result() // keliling lingkaran dengan jari jari 7 => 2 x Pi x r = 44
// calc.x = 7 // set jari jari 7
// calc.square().multiply(PI).result() // luas lingkaran dengan jari jari 7 => PI x r pangkat 2 = 154
// calc.x = 4
// calc.exponent(3).result() // 4 pangkat 3 = 64
// calc.squareRoot().result() // akar pangkat 2 dari 64 = 8