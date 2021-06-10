'use strict';

let write = '';

(function(){
    //classes can replace constructor functions
    class Person{
        constructor (firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.membership = "New Member";//you don't need to take parameters when constructing
        }
        get fullName () {
            return this.firstName + ' ' + this.lastName;
        }
        set fullName (fullName){
            let nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }
    }
    let liz = new Person ('Liz', 'Loftus', 26);
    write = liz;
    console.log(write);

    liz.fullName = "Penny Lane";
    write += liz.fullName;
    console.log(write);
})();