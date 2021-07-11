class Ninja{
    constructor(name, health, speed=3 , strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`${this.name}`);
    }

    showStats(){
        console.log(`name :${this.name}\nstrength: ${this.strength}\nspeed : ${this.speed}\nhealth: ${this.health}`);
    }

    drinkShake(){
        this.health += 10;
    }
}


class Sensei extends Ninja{
    constructor( health = 200, speed = 10, strength=10, wisdom = 10){
        super("Master Sprinter", health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkShake();
        console.log("This is a wise message");
    }
} 
const sensi = new Sensei();
sensi.showStats();
sensi.speakWisdom();
sensi.showStats();