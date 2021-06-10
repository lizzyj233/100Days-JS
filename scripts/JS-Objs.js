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

//built in JS objects
//Math Objects
(function (){
    console.log(`Pi equals: ${Math.PI}. 
The "max" between 1, 22, 5 is ${Math.max(1, 22, 5)}.
27.123 "round"ed up is ${Math.round(27.123)}.`);
})();

//Date objects
(function (){
    let date = new Date();//passing no params represents the current date & time
    console.log(`NOW is: ${date}!`);

    let beginningOfTime = new Date(0);//0 represents Jan 1, 1970 at 12:00AM GMT -- this is called "unix epoch time"... woo!
    console.log(beginningOfTime);

    let progress = new Date(1000);//1000 milliseconds, or 1 second past Jan 1, 1970 12AM GMT
    console.log(progress);

    let today = new Date(2021, 5, 10, 16, 30, 57);//year, month(0 based, for no reason), day, hour, minute, second, millisecond - standard way to pass a date with separate ints for each, GMT

    //each date integer has built in getter & setters -- getters return times relative to the computer it is running on, unless you use the "UTC versions"
    console.log(`Today is ${today}. Break that down... year: ${today.getFullYear()}, month: ${today.getMonth()}, day: ${today.getDay()}, date: ${today.getDate()}, hour: ${today.getHours()}, minute: ${today.getMinutes()}, second: ${today.getSeconds()}, millisecond: ${today.getMilliseconds()}!`);

    let future = new Date();
    future.setMonth(10);
    future.setDate(17);
    future.setFullYear(2030);
    console.log(future);

    let untilFuture = future - today; //returns difference in dates in milliseconds
    console.log(untilFuture);
})();

//regex objects
(function (){
    function checkPwdComplexity(password){
        let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$');//will check for lowercase, uppercase, numbers, and at least 8 chars long
        return regex.test(password);
    }
    function checkPwdComplexity2(password){
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; //other way to put the above, don't need escpae char on digit
        return regex.test(password);
    }
    console.log(`abc123 is a strong password! ${checkPwdComplexity('abc123')}`);
    console.log(`AUn89$ghC32-BV is a strong password! ${checkPwdComplexity('AUn89$ghC32-BV')}`);
    console.log(`pass123 is a strong password! ${checkPwdComplexity2('pass123')}`);
    console.log(`H5P3gc-89Cv!a is a strong password! ${checkPwdComplexity2('H5P3gc-89Cv!a')}`);

    function findAlerts(logData){
        let regex = /ERROR(.*?):(.*?);/g;//regex for anything that says error plus text following until it reaches a colon. By default, regex only looks for first match then stops looking, so the "g" for global keeps looking. The parentheses are called "capture groups"
        console.log(regex.exec(logData));
        console.log(regex.exec(logData));
        return regex.exec(logData);//note that a regex function returns an array
    }
    let data = "INFO:OK;ERROR(HIGH):Something broke;ERROR(LOW):Something fishy;";
    let result = findAlerts(data);
    console.log(result);
    console.log(result[0]);//bc regex is an array, you can access individual indices
    console.log(result.input);//access regex result by property... because in JS, arrays are actually just objects :) 
})();