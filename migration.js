class Migration {
    constructor(weatherPattern, riverLevels,species,location) {
        this.weatherPattern = weatherPattern;
        this.riverLevels = riverLevels;
        this.species = species;
        this.location=location;
        
    }
    migration() {
        var riverlevel= "low"
        var weatherPattern="dry"

        if (this.weatherPattern === weatherPattern && this.riverLevels === riverlevel) {
            console.log(`migration of ${this.species} will occur from  ${this.location} due to lack of water and food in their recent location`);
        } else {
            console.log(`migration of ${this.species} will occur from  ${this.location} due to lack of water and food in their recent location`);
        }
    }
}
const migrationInstance = new Migration("dry", "low","Zebra","Serengeti");
migrationInstance.migration();