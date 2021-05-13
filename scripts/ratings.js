//These are functions that can pretty much go wherever on the site.
//calculate received ratings

let ratingsButton = document.getElementById("submit-ratings");


ratingsButton.addEventListener("click", (e)=> {
  let ratingCat1 = document.getElementById("rating-cat-1").value;
  let ratingCat2 = document.getElementById("rating-cat-2").value;
  let ratingCat3 = document.getElementById("rating-cat-3").value;  
  calculateRating(ratingCat1, ratingCat2, ratingCat3);
  e.preventDefault();
  });

function calculateRating(a, b, c){
  try{
      let x = parseInt(a);
      let y = parseInt(b);
      let z = parseInt(c);
      let total = x + y + z;
      let avgRating = total/3;
      avgRating = avgRating.toFixed(1);
      createResponse(avgRating);
    }
    catch(error){
      console.log("not numbers");
    }
}

function createResponse(rating){
  let response = `Average rating of ${rating}. `;
  if(rating >= 4){
    response += `Thank you for such <b>generous</b> feedback. I appreciate YOU!`;
  }
  else if((rating >= 2) && (rating < 4)){
    response += `Umm okay. thanks i guess....?`;
  }
  else if(rating <2) {
    response += `Your feedback is <b>not welcome</b>. byeeeee!`;
  }
  else{
    response = `Your ratings are not valid. Please submit using only numbers 0-5!`;
  }
  document.getElementById("ratings-result").innerHTML = response;
  document.getElementById("ratings-result").style.display = "block";
}