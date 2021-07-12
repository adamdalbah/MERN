class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, resilience, power){
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card{
    constructor(name,cost, stat, magnitude){
        super(name, cost);
        this.name = name;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    effect(target){
        if(target instanceof Unit){
            if(this.stat == "resilience"){
                target.resilience += this.magnitude;
            }
            if(this.stat == "power"){
                target.power += this.magnitude;
            }
        }
        else{
            throw new Error("Target must be a unit!");
        }
        
    }
}

const red_ninja = new Unit("Red Belt Ninja", 3, 4, 3);
const black_ninja = new Unit("Black Belt Ninja", 4, 4, 5);

const hard_algorithm = new Effect("Hard Algorithm", 2, "resilience", 3);
const unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const pair_programming = new Effect("Pair Programming", 3, "power", 2);


