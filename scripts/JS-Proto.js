//a function's prototype is the object "instance" that will become the prototype for all objects created using this function as a constructor

//an object's prototype is the object "instance" from which the object is inherited

//a protoype, whether function or object, is just an instance of an object in memory

'use strict';

(function () {
    function Animal(type, name){
        this.type = type;
        this.name = name;
    }
    
    Animal.prototype.isGood = true;

    console.log('The protoype of the "Animal" constructor fn is: ')
    console.log(Animal.prototype);

    let meow = new Animal('Cat', 'Penny');
    let woof = new Animal('Dog', 'Candy');

    console.log('The prototype of the new "meow" object created with the "Animal" constructor fn is:');
    console.log(meow.__proto__);

    console.log('Are the protoypes of the "Animal" function and the "meow" object ===?');
    console.log(Animal.prototype === meow.__proto__);

    console.log(`Are ${meow.name} and ${woof.name} very good? 
        ${meow.name} is good: ${meow.isGood}
        ${woof.name} is good: ${woof.isGood}`);

    console.log(`Looks like Penny and Candy threw a party while Liz and Christina were away. All "Animal" types are no longer good because they attended the party.`);
    Animal.prototype.isGood = false;

    console.log(`Are ${meow.name} and ${woof.name} very good? 
        ${meow.name} is good: ${meow.isGood}
        ${woof.name} is good: ${woof.isGood}`);

})();