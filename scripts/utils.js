//write footer to html
(function (){
    document.getElementById("footer").innerHTML = `<p>connect with me on twitter <a href="https://twitter.com/lizzydeb233">@lizzydeb233</a></p>
    <p>find my stuff on <a href="https://github.com/lizzyj233">Github</a></p>  `;
})();


//create day countdown -- messed with code found online for this
let countDownDate = new Date("Aug 19, 2021 12:00:00").getTime(); //100th day-ish

// Update the count down every 1 second
(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = `<b>Time Remaining:</b>  ${days}days`;
  document.getElementById("countdown").style.display = "block";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Challenge Over";
    document.getElementById("countdown").style.display = "block";
  }
})();