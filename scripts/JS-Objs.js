let createObjButton = document.getElementById("buildObjects");
let buildConstructorButton = document.getElementById("buildConstructor");
let customConstructButton = document.getElementById("submit-day16");

createObjButton.addEventListener("click", (e)=>{
    makeObjects();
    e.preventDefault();
});

buildConstructorButton.addEventListener("click", (e)=>{
    makeConstructor();
    e.preventDefault();
});

customConstructButton.addEventListener("click", (e)=>{
    customConstruction();
    e.preventDefault();
})

function makeObjects(){
    let objMessage;

    //defining a new Object Literal
    let person = {
        Name: 'Liz',
        Bday: "June 1"
    };
    person.age = 26;
    person.isAdult = function(){return this.age >= 18;}
    
    objMessage = `${person.Name} is an adult: ${person.isAdult()}. `;


    //create an object with a function
    function registerUser(fname, lname){
        let newPerson = {
            firstName: fname,
            lastName: lname
        };
        objMessage += `newPerson properties longhand: ${newPerson.firstName} ${newPerson.lastName}. `;

        //do the same thing as above with Property shorthand
        let newPerson2 = {
            fname,
            lname
        };
        objMessage += `newPerson2 properties shorthand: ${newPerson2.fname} ${newPerson2.lname}. `;

        //nested key values
        let newPerson3 = {
            name:{
                firstname: fname,
                lastname: lname
            },
        age: 100,
        };
        objMessage += `newPerson3 with fname & lname inside name key: ${newPerson3.name.firstname} ${newPerson3.name.lastname} of age ${newPerson3.age}. `;
    }
    registerUser('Lil','Debbie');

    //manipulate and discover the keys of objects
    objMessage += `${(Object.keys(person))} are the properties in the "person" object. `;
    for (let x in person){
        objMessage += `${x} `;
    }
    objMessage += ` is another way to access the properties in "person"!`;

    console.log(objMessage);
    document.getElementById("day16-content-1").innerHTML = "Magical objects being created behind the scenes -- check the console!";
    document.getElementById("day16-content-1").style.display = "block";
    

    let singer = {
        first: 'Taylor',
        last: 'Swift'
    };

    Object.defineProperty(singer, 'fullName',
    {
        get: function(){
            return this.first + ' ' + this.last;
        }
    });
    console.log(singer.fullName);

    Object.defineProperty(singer, 'fullName',
    {
        get: function(){
            return this.first + ' ' + this.last;
        },
        set: function(value){
            var nameParts = value.split(' ');
            this.first = nameParts[0];
            this.last = nameParts[1];
        }
    });
    singer.fullName = 'Miley Cyrus';
    console.log(singer.fullName);
}


function makeConstructor(){
    
    //this is a constructor function -- just a regular fn with the keyword "this" to assign properties
    function Pet(name, typeOfAnimal){
        this.name = name;
        this.typeOfAnimal = typeOfAnimal;
    }
    let myPet = new Pet("Penny", "Cat");

    console.log(`You've constructed an imaginary pet! Its name is ${myPet.name} and it is a ${myPet.typeOfAnimal}.`);
    document.getElementById("day16-content-2").innerHTML = `Construction under way -- check the console!`;
    document.getElementById("day16-content-2").style.display = "block";
}


function customConstruction(){
    function profile(name, age, faveColor, pets, advice){
        this.name = name;
        this.age = age;
        this.faveColor = faveColor;
        this.pets = pets;
        this.advice = advice;
    }

    let tempName = document.getElementById("day-16-name").value;
    let tempAge = document.getElementById("day-16-age").value;
    let tempColor = document.getElementById("day-16-color").value;
    let tempPets = document.getElementById("day-16-pet").value;
    let tempAdvice = document.getElementById("day-16-advice").value;

    if((tempName != "") && (tempAge != "") && (tempColor != "") && (tempPets != "") && (tempAdvice != "")){
        let yourLife = new profile(tempName, tempAge, tempColor, tempPets, tempAdvice);

        document.getElementById("day16-Construct").innerHTML = `<strong>Here's a little bit about ${yourLife.name}</strong>. <br> ${yourLife.name} has spent all day, every day, of the last ${yourLife.age} years surrounding themselves with ${yourLife.faveColor} things and coping with life by spending an unhealthy amount of time with their trust sidekick, ${yourLife.pets}. One piece of valuable advice that ${yourLife.name} would give to anyone who also likes ${yourLife.faveColor} is: ${yourLife.advice}.`;
        document.getElementById("day16-Construct").style.display = "block";
    } else{
        document.getElementById("day16-Construct").innerHTML = `<span style='color: firebrick;'><strong>Incomplete form. Don't be lazy: fill it out!</strong></span>`;
        document.getElementById("day16-Construct").style.display = "block";
    }
}