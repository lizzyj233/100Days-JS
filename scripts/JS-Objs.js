'use strict';

let createObjButton = document.getElementById("buildObject");
let buildConstructorButton = document.getElementById("buildConstructor");

createObjButton.addEventListener("click", (e)=>{
    makeObjects();
    e.preventDefault();
});

buildConstructorButton.addEventListener("click", (e)=>{
    makeConstructor();
    e.preventDefault();
});

function makeObjects(){
    let objMessage;

    //defining a new Object Literal
    let person = {
        Name: 'Liz',
        Bday: "June 1"
    };
    person.age = 26;
    person.isAdult = function(){return this.age >= 18;}
    
    objMessage = `${person.Name} is an adult: ${person.isAdult()}. <br>`;


    //create an object with a function
    function registerUser(fname, lname){
        let newPerson = {
            firstName: fname,
            lastName: lname
        };
        objMessage += `newPerson properties longhand: ${newPerson.firstName} ${newPerson.lastName}. <br>`;

        //do the same thing as above with Property shorthand
        let newPerson2 = {
            fname,
            lname
        };
        objMessage += `newPerson2 properties shorthand: ${newPerson2.fname} ${newPerson2.lname}. <br>`;
    }
    registerUser('Lil','Debbie');

    //manipulate and discover the keys of objects
    objMessage += `${(Object.keys(person))} are the properties in the "person" object. <br>`;
    for (let x in person){
        objMessage += `${x} `;
    }
    objMessage += ` is another way to access the properties in "person"!`;

    document.getElementById("day16-content-1").innerHTML = objMessage;
    document.getElementById("day16-content-1").style.display = "block";
    
}

function makeConstructor(){
    
    //this is a constructor function -- just a regular fn with the keyword "this" to assign properties
    function Pet(name, typeOfAnimal){
        this.name = name;
        this.typeOfAnimal = typeOfAnimal;
    }
    let myPet = new Pet("Penny", "Cat");

    document.getElementById("day16-content-2").innerHTML = `You've constructed an imaginary pet! Its name is ${myPet.name} and it is a ${myPet.typeOfAnimal}.`;
    document.getElementById("day16-content-2").style.display = "block";
}
