class PossibleFruit {
    constructor(fruit, effect, power, season) {
        this.fruit = fruit;
        this.effect = effect;
        this.power = power;
        this.season = season;
    }
}j

let database = [];
let fruit1 = new PossibleFruit("mango", "Strength", "Strong", "wet");
let fruit2 = new PossibleFruit("banana", "Vitamin C", "Medium", "dry");

database.push(fruit1, fruit2);

class Season {
    constructor(season) {
        this.season = season;
    }

    predictSeason() {
        let finalFruit = database.filter(item => item.season === this.season);
        return finalFruit;
    }
}

let finalFruit = new Season("wet");
console.log(finalFruit.predictSeason());

