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
