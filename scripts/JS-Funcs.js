//argument = value passed to the function when we invoke it
//parameter = variable that we list as part of a function definition

//the "Arguments Object" -- used when you don't know how many arguments you will pass to a function -- the arg. object has built in length but not forEach or map
function printAll(){
    for(let i = 0; i< arguments.length; i++){
        console.log(arguments[i]);
    }
}
printAll(1, 2, 3, 4, 5);
printAll(10, 20);



//Immediately Invoked Function Expressions - IIFE -- this will be invoked right away!
(function (){
    console.log("We're in an IIFE!");
})();

//use an IIFE to assign value to variable
let message = (function (){
    return "Hi!";
})();
console.log(message);



//closures prevent variables defined within fns from going out of scope once the fn is executed
//use a variable as invoking a function
function setupCounter (num){
    return function Counter(){
        return num++;
    }
}
let count = setupCounter(0);
console.log(count()); //0
console.log(count()); //1
let count2 = setupCounter(10);
console.log(count2()); //10



//Arrow Functions = a more compact way of writing a function expression
//arrown funcs in other languages are known as "lambda" expressions

//regular anonymous function
let greetings = function(){
    return "I'm a regular anonymous fn...";
}
let regAnFn = greetings();
console.log(regAnFn);
console.log(greetings());

//as an arrow function
let greetings2 = () => "I'm an arrow function!"; //no need to return; string is implicitly assigned to greetings2 variable
let arrFn = greetings2();
console.log(arrFn);
console.log(greetings2());

//an arrow fn taking a parameter
let greetings3 = myName => "Hello " + myName;
let myMessage = greetings3("Liz");
console.log(myMessage);



//function context -- understand "this" in the context of a function
function sayHi(){
    console.log("Hi " + this); //here, "this" refers to the global window object
}
sayHi(); //Hi [object Window]

let greetings4 = {}; //assign an empty object to the variable
greetings4.sayHowdy = function(){ //define sayHowdy property with value of anonymous fn
    console.log("Howdy " + this); //here, "this" refers to the empty object
}
greetings4.sayHowdy(); //Howdy [object Object]

function sayHola() {
    console.log("Hola " + this); // "this" in a constructor function refers to an empty object
}
let holaAmiga = new sayHola(); //Hola [object Object]



//setting the value of "this" to something other than the current execution context
//call() method -- pass an object to the call method as an argument of a function
let miAmiga = {name: "Camila", age: 25};
let sayHola2 = function(){
    console.log("Hola " + this.name);
}
sayHola2.call(miAmiga);
//you can also pass additional args through call
let sayHola3 = function(question, response){
    console.log("Hola " + this.name + "! " + question + response);
}
sayHola3.call(miAmiga, "Que tal?", " Bien. Y tu?"); //expected arguments should come after unexpected? this won't work if i put the strings before miAmiga



//the apply() method -- similar to call() but call accepts an arg list, which apply() accepts a single array of args
function introduction(name, profession){
    console.log("My name is " + name + " and I am a " + profession + ".");
}
//all three of the following will print appropriately -- pass undefined for apply & call here because we are not changing context of "this" --- i'm not sure i understand this though
introduction("Kyle", "Financial Analyst");
introduction.apply(undefined, ["Debbie", "Rapper"]);//takes an array -- use this when the input value is already in the form of an array with similar elements
introduction.call(undefined, "Linda", "Veterinarian");//takes a list of args -- use this when you have individual args of varying type



//the bind() method -- make a copy of a function and then change the value of "this"
let person1 = {name: "Mary",
                getName: function(){
                    return this.name;
                }
            };
let person2 = {name: "John"};
let getNameCopy = person1.getName.bind(person2); //makes a new fn as a copy of the getName fn within person1 -- the value of this within the copied fn is set to the value of person2
console.log(getNameCopy()); //John



//built in functions
//eval()
let x = 1;
let y = 2;
let z = 'abc';
console.log(eval('x + y + 4')); //takes expression as string and evaluates
console.log(eval('x + y + z')); //won't throw an error if unlike types, just concatenates?

//parseInt() parses a string and return and integer
//parseFloat() parses a string and returns a floating point number

//escape() returns the hexideical encoding of a string in the isolated one character set
console.log(escape('Current Search Terms!'));
//unescape does the opposite of escape
console.log(unescape('Current%20Search%20Terms%21'));



//Default parameters
function whatsUp(name = "Liz"){
    console.log("Hello " + name);
}
whatsUp(); //if no args, will use default param
whatsUp("Kyle");

function sayHej(message, name = "Liz"){ //default parameter should always come last in list
    console.log(message + name);
}
sayHej("Hej, godmorgen ");
sayHej("Hej, godaften ", "Penny");



//Rest parameters -- useful when invoking a function with multiple args
let sayBye = function farvel(...names){ //the ... is what makes it a rest param; can take as many args as passed and they are collected into an array
    names.forEach(name => console.log("Farvel " + name));
}
sayBye("Liz", "Kyle", "Penny");

let sayBye2 = function adios(message, ...names){ //rest params should always come after regular params here too
    names.forEach(name => console.log(message + name));
}
sayBye2("Adios ", "Liz", "Kyle", "Penny");



//Spread operator -- allows a function to take an array as an argument and spread out its elements so that they can be assigned to individual params
function days(day1, day2){
    console.log("today is " + day1 + " and tomorrow is " + day2);
}
let dayList = ['Monday', 'Tuesday', 'Wednesday'];
days(...dayList);

//since a string is an array of chars, each char will be assigned an arg
let letters = 'abcd';
days(...letters);
