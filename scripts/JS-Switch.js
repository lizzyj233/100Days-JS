//this is a simple project to show usage of switch statements
//a switch statement chooses what action to take based on a set of pre-defined possibilities. 

//This is a fortune teller that uses a switch statement - switch statements are better than many if else statements

let fortuneButton = document.getElementById("subDay1");

fortuneButton.addEventListener("click", (e)=>{
    let luckyNum = document.getElementById("lucky-number").value;
    fortuneMaker(parseInt(luckyNum));
    e.preventDefault();
});

function fortuneMaker(ln){
    let message = `<b>Lucky Number ${ln}: </b>`;
    switch(ln){
        case 1:
            message += `You will go to Taco Bell today and regret it tomorrow.`;
            break;
        case 3:
            message += `The quest that you are on requires the Glasses of Nerdicon!`;
            break;
        case 5:
            message += `You will be reincarnated as a taco cat. Nice!`;
            break;
        case 6:
            message += `There might be five dollars in your pocket. Might...`;
            break;
        case 7:            
            message +=`You will fill the void in your pathetic life by playing whackamole 17 hours a day.`;
            break;
        case 8:
            message += `You will party all night long with Party Pat.`;
            break;
        case 10:
            message += `Meow! Your newest furry friend is at the door.`;
            break;
        default:
            message += `is not a lucky number. Misfortune shall come your way!`;
            break;
    }
    document.getElementById("day1-content").innerHTML = message;
    document.getElementById("day1-content").style.display = "block";
}
