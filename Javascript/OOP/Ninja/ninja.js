class Ninja{
    constructor(name, health, speed = 3, strength = 3){
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
const ninja = new Ninja("adam", 86);
ninja.showStats();
ninja.drinkShake();
ninja.showStats();