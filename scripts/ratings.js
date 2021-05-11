//These are functions that can pretty much go wherever on the site.
//calculate received ratings

let ratingsForm = document.querySelector("ratings-form");

ratingsForm.addEventListener("click", function(event) {
    console.log("in event listener");
    calculateRating();
    event.preventDefault();
  }, false);

function calculateRating(){
    console.log("event listener works." + ratingsForm);
    
}