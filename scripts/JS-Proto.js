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

    //if you change the value of the property and not the prototype, the prototype is not affected.
    console.log(`Candy did the dishes and earned back some points. She is good now but actually still up to no good.`);
    woof.isGood = true;
    console.log(`Candy is good currently (property value)? ${woof.isGood}
    Is Candy always good (prototype)? ${woof.__proto__.isGood}`);
    //when JS runs code as in getting the value of woof.isGood, it first checks to see if the object specifically has a property called "isGood" (returns this if it does and does not check proto) -- if it does not, it checks the protoype for a property called "isGood" (returns this if it does, otherwise undefined). 
})();