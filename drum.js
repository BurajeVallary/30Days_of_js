class Drum {
    constructor(material, size) {
      this.material = material;
      this.size = size;
    }
    predict_sound() {
      console.log(`${this.constructor.name},${this.sound} and is made up of ${this.material} which is ${this.size} in size`);
    }
  }
  class Djembe extends Drum {
    sound = "produces a soprano sound";
  }
  class TalkingDrum extends Drum {
    sound = "Produces a soft sound";
  }
  class Bougarabao extends Drum {
    sound = "produces a bass sound";
  }
  const drum1 = new TalkingDrum("skin", "big");
  drum1.predict_sound();
  const drum2 = new Djembe("smooth animal skin", "small");
  drum2.predict_sound();
  const drum3 = new Bougarabao("smooth animal skin", "small");
  drum3.predict_sound();