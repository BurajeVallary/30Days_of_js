class Ankara{
    constructor(temperature,mood){
        this.temperature=temperature
        this.mood=mood

    }
    getpattern(){
        const temp = 20
        const mood = 5

        if(this.temperature>=20 && this.mood>=5){
            console.log("Wear less patterned Ankara");
        }else{
            "Wear more patterned ankara"
        }
    }
}
let ankara = new Ankara(20,7)
ankara.getpattern()





