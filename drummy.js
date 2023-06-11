class Drum{
    constructor(size,material){
        this.size=size
        this.material=material
        
    }

    getSound(){
        console.log(`${this.constructor.name}, ${this.sound} which is made of  ${this.material} and is ${this.size}` );
    }


}

class Djembe extends Drum{
    sound= "Wide range of tones"
}

class TalkingDrum extends Drum{
    sound= "Mimics the lines of human speech"
}

class Bougarabao extends Drum{
    sound = "Deep bass tones"
}

let drum1=new Djembe("leather","skin")
drum1.getSound()