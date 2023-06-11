class MagicalBaobab {  constructor(fruits) {
    this.fruits = fruits || [
      {
        name: 'Mystery Fruit',
        power: 'unknown',
        effects: []
      },
      {
        name: 'Fire Fruit',
        power: 'heat resistance',
        effects: []
      },
      {
        name: 'Ice Fruit',
        power: 'cold resistance',
        effects: []
      }-
    ];
  }
 getFruitPower(name){
  const fruit=this.fruits.find(fruit=>fruit.name===name);
    return fruit.power
 }
  recordEffect(name, effect) {
    const fruit = this.fruits.find(fruit => fruit.name === name);
      fruit.effects.push(effect);
      return fruit.effects
  }
  getAllFruits() {
    return this.fruits;
  }
}
let magicalbaobab = new MagicalBaobab();
console.log(magicalbaobab.getAllFruits());
const fireFruitPower = magicalbaobab.getFruitPower('Fire Fruit');
console.log('The power of the Fire Fruit is:', fireFruitPower);
magicalbaobab.recordEffect('Ice Fruit', 'feeling cold');
console.log(magicalbaobab.getAllFruits());