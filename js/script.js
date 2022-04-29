var Airplane = function(fly, land) { //object constructor syntax
    this.fly = fly;
    this.land = land;
    } 
    
Airplane.prototype.willNotLand = function(){//the protoype allows us to add more methods to the Airplane object
    if (this.land) {
        console.log(`${this.fly} can fly`);
    } else {
        console.log(`$(this.fly) cannot fly`)
    }
};

  // create different instances of Airplane:
let jet = new Airplane("jet", true);
jet.willNotLand(); // jet can fly

let airbus = new Airplane("airbus", false); 
airbus.willNotLand(); // airbus cannot fly