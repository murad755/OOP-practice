const vehicle = {
    brand: 'BMW',
    model: '335',
    year: 2016,
    gearbox: 'Manual',
    AWD: true
}

const vehicle1 = {
    brand: 'Mercedes',
    model: 'E350',
    year: 2010,
    gearbox: 'Auto',
    AWD: true
}




class Vehicle {
    constructor(brand, model,year, gearbox, AWD) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.gearbox = gearbox;
        this.AWD = AWD;
    }

    horn() {
        console.log(`${this.brand} ${this.model} horn honked`)
    }

    goHill() {
        if (!this.AWD) {
            console.log(`This ${this.brand} ${this.model} does not have AWD system`)
        } else {
            console.log(`This ${this.brand} ${this.model} has AWD system`)
        }
    }

    drive() {
        let limit = 100;
        let acceleration = 0
        let start = setInterval(() => {
            acceleration += 10
            console.log(acceleration)
            if (acceleration === limit) {
                clearInterval(start)
            }
        }, 500)
    }
}

let bmw = new Vehicle(vehicle.brand, vehicle.model, vehicle.year, vehicle.gearbox, vehicle.AWD)
let mercedes = new Vehicle(vehicle1.brand, vehicle1.model, vehicle1.year, vehicle1.gearbox, vehicle1.AWD)

bmw.horn()
bmw.drive()
bmw.goHill()