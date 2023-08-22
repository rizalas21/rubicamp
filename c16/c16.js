class Tyre {
    constructor(brand, size) {
        this.brand = brand
        this.size = size
    };
};

class Car extends Tyre {
    constructor(brand, size, varian, door, seat, warranty, year, sn) {
        super(brand, size);
        this.varian = varian;
        this.door = door;
        this.seat = seat;
        this.year = year;
        this.warranty = warranty;
        this.sn = sn;        
    };
};

class Agya extends Car{}

class Rush extends Car{}


class CarFactory {
    constructor() {
        this.cars = []
    }

    produce(year) {
        for(let i = 0; i <= Math.floor(Math.random() * 6); i++) {
            this.cars.push(new Agya('goodYear', 15, 'Agya', 5, 5, 4, year, CarFactory.serialNumber()))
        }
        for(let i = 0; i <= Math.floor(Math.random() * 6); i++) {
            this.cars.push(new Rush('Hankook', 18, 'Rush', 5, 5, 3, year, CarFactory.serialNumber()))
        }
    };

    result() {
        console.log('hasil produksi : ');
        let jumlah = 1;
        for(let car of this.cars) {
            console.log(
                `

                no. ${jumlah}
                varian            : ${car.varian}
                sn                : ${car.sn}
                door              : ${car.door}
                seat              : ${car.seat} seater
                tyre              : ${car.brand} ${car.size} inch
                year              : ${car.year}
                warranty          : ${car.warranty} year

            `)
            jumlah++
        }
    };

     guaranteeSimulation(simulationYear) {
        console.log("Hasil simulasi garansi semua mobil pada tahun 2025 :");
        let jumlah = 1
        for(let car of this.cars) {
            console.log(
                `
                no. ${jumlah}
                varian            : ${car.varian}
                sn                : ${car.sn}
                door              : ${car.door}
                seat              : ${car.seat} seater
                tyre              : ${car.brand} ${car.size} inch
                year              : ${car.year}
                warranty          : ${car.warranty} year
                `
            );
            if(car.year + car.warranty >= simulationYear) {
                console.log(`Status on ${simulationYear} this guarantee status is active`)
            } else {
                console.log(`Status on ${simulationYear} this guarantee status expired`)
            }
            jumlah++;
        }
    };
    static serialNumber() {
        const chars = '1234567890qwertyuiopasdfghjklzxcvbnm';
        let serialNum = '', indexRandom, charRandom
        for(let i = 0; i < 36; i++) {
            indexRandom = Math.floor(Math.random() * chars.length);
            charRandom = chars.slice(indexRandom, indexRandom + 1);
            if(i == 8 || i == 13 || i == 18 || i == 23) {
                indexRandom = -1;
                charRandom = '-'
            }
            serialNum += charRandom;
        } 
        return serialNum;
    }
}



const toyota = new CarFactory()  
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)