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
      console.log(avgRating.toFixed(1));
    }
    catch(error){
      console.log("not numbers");
    }
}
