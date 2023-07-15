class UberPriceCalculator {

    constructor(distance, time) {
        this.distance = distance;
        this.time = time;
    }

    calculatePrice() {
        let basePrice = 10;
        let perMinutePrice = 0.2;
        let perMilePrice = 1.5;

        let price = basePrice + this.time * perMinutePrice + this.distance * perMilePrice;

        return Math.ceil(price);
    }

}

let calculator = new UberPriceCalculator(10, 30);
let price = calculator.calculatePrice();
console.log(price); // 31
