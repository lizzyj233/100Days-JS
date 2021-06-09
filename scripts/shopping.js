//create list of items available to buy with quantities available
//allow user to add items to cart
//update item quantities
//update cart 
//create cart summary -- items, cost
//add button to remove items from cart
//add button to clear cart
//add button to submit order and provide response

//TODO: apply()
//TODO: call()
//TODO: bind()
//TODO: use function closure
//OPTIONAL: eval(), escape(), unescape(), parseInt(), parseFloat()

let inventory = []; //initiate and update quantities on ATC clicks
let cart = []; //update on ATC clicks
let subtotal = 0.0; //update on ATC clicks
let updateSubtotalATC = cost => subtotal += cost; //updates on ATC

(function (){
    function createInventory(item, quantAvail, itemPrice){
        this.item = item;
        this.quantAvail = quantAvail;
        this.itemPrice = itemPrice;
    }

    let Jeans = new createInventory("Jeans", 12, 78.98);
    let Jacket = new createInventory("Jacket", 32, 65.23);
    let Shirt = new createInventory("Shirt", 60, 25.99);
    let Sneakers = new createInventory("Sneakers", 45, 129.99);
    let Socks = new createInventory("Socks", 110, 6.95);
    let Hat = new createInventory("Hat", 110, 22.49);

    inventory = [Jeans, Jacket, Shirt, Sneakers, Socks, Hat];
})();

//use the spread operator argument and a rest paramter to display the inventory list
function displayInventory(...inventory){
    let inventoryList = " "; //to display on the html
    inventory.forEach(function(items){
        inventoryList += 
            `<strong>${items.item}</strong>: ${items.quantAvail} available for $${items.itemPrice} per item <button id="ATC${items.item}" class="button2">Add to Cart</button><br><br>`;
    });
    document.getElementById("current-inventory").innerHTML = inventoryList;
}
displayInventory(...inventory);

//Add to cart button actions
let ATCJeansButton = document.getElementById("ATCJeans");
ATCJeansButton.addEventListener("click", (e)=>{
    console.log(inventory[0].quantAvail);
    ATC(inventory[0]);
    displayInventory(...inventory);
    e.preventDefault();
});

let ATCJacketButton = document.getElementById("ATCJacket");
ATCJacketButton.addEventListener("click", (e)=>{
    console.log(inventory[1].quantAvail);
    ATC(inventory[1]);
    displayInventory(...inventory);
    e.preventDefault();
});

let ATCShirtButton = document.getElementById("ATCShirt");
ATCShirtButton.addEventListener("click", (e)=>{
    console.log(inventory[2].quantAvail);
    ATC(inventory[2]);
    displayInventory(...inventory);
    e.preventDefault();
});

let ATCSneakersButton = document.getElementById("ATCSneakers");
ATCSneakersButton.addEventListener("click", (e)=>{
    console.log(inventory[3].quantAvail);
    ATC(inventory[3]);
    displayInventory(...inventory);
    e.preventDefault();
});

let ATCSocksButton = document.getElementById("ATCSocks");
ATCSocksButton.addEventListener("click", (e)=>{
    console.log(inventory[4].quantAvail);
    ATC(inventory[4]);
    displayInventory(...inventory);
    e.preventDefault();
});

let ATCHatButton = document.getElementById("ATCHat");
ATCHatButton.addEventListener("click", (e)=>{
    console.log(inventory[5].quantAvail);
    ATC(inventory[5]);
    displayInventory(...inventory);
    e.preventDefault();
});

function ATC (item){
    cart.push(item); //add inventory object to cart array
    updateSubtotalATC(item.itemPrice); //update cart subtotal
    item.quantAvail -= 1; //update item quantity available
    updateCartSummary();
}

//Use fn with default param; Update message displayed on html with cart summary
function updateCartSummary(message = "Order Summary: "){
    let products = "";
    for (x of cart){
        products += `${x.item}<br>`;
    }
    document.getElementById("cart").innerHTML = `<b>${message}</b> <br> $${subtotal} <br> ${products}`;
}