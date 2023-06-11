// class Ankara{
//     constructor(temperature,mood){
//         this.temperature=temperature
//         this.mood=mood
//     }
//     getcolor(){
//         const temp=20
//         const mood=5
//         if (this.temperature>=temp &&this.mood>=mood) {
//             console.log("wear light and more patterned ankara");
//         }
//         else{
//             console.log("wear dull and less patterned ankara");
//         }
//     }
// }
// let ankara=new Ankara(20,7)
// ankara.getcolor()


class Ankara{
    constructor(mood,temperature){
        this.mood=mood;
        this.temperature=temperature;
    }
    getColor(){
        const temp =10;
        const moods=5;
        if (this.temperature>=temp && this.mood>=moods) {
            console.log("Wear more patterned clothers");
        }
        else{
            console.log("Wear less patterned clothes");
        }
    }
}
let ankara=new Ankara(20,7)
ankara.getColor()


