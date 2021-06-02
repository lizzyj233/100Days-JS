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