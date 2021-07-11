class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
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