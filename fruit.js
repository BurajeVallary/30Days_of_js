
// Define the PossibleFruit class
class PossibleFruit {
    constructor(name, power, effects, season) { 
      this.name = name;
      this.effects = effects;
      this.season = season; 
      this.power=power
    }
  }
  
  // Define the Season class
  class Season {
    constructor(seasons) {
      this.seasons = seasons;
    }
  }
  
  // Create some sample fruits and seasons
  let fruits = [
    new PossibleFruit("Baobab", "strength", "get strong", new Season("wet")),
    new PossibleFruit("Banana", "energy", "boost energy", new Season("dry")),
    new PossibleFruit("Mango", "immunity", "strengthen immunity", new Season("wet")),
  ];
  
  // Define the predictFruit method
  function predictFruit(season) { // add parameter for season
    let finalFruit = fruits.filter((item) => item.season.name === season.name); 
    return finalFruit;
  }
  
  // Call the predictFruit method
  let result = predictFruit(new Season("wet"));
  console.log(result); 