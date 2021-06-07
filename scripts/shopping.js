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
//TODO: use default parameters
//TODO: use rest parameters
//OPTIONAL: eval(), escape(), unescape(), parseInt(), parseFloat()

let inventory = []; //initiate and update quantities on ATC clicks
let cart = []; //update on ATC clicks
let subtotal = 0.0; //update on ATC clicks
let updateSubtotalATC = cost => subtotal += cost; //updates on ATC
let inventoryList = " "; //to display on the html

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

//use the spread operator to display the inventory list
function displayInventory(...inventory){
    inventory.forEach(function(items){
        console.log(items.item);
        inventoryList += 
            `<strong>${items.item}</strong>: ${items.quantAvail} available for $${items.itemPrice} per item <button id="ATC${items.item}" class="button2">Add to Cart</button><br><br>`;
    });
    document.getElementById("current-inventory").innerHTML = inventoryList;
}
displayInventory(...inventory);

//Add to cart button actions
let ATCJeansButton = document.getElementById("ATCJeans");
ATCJeansButton.addEventListener("click", (e)=>{
    cart.push(inventory[0]); //add Jeans item property to cart array
    console.log(cart);
    updateSubtotalATC(inventory[0].itemPrice); //update cart subtotal with Jeans itemPrice
    console.log(subtotal);
    //TODO: decrease Jeans inventory quantity
    e.preventDefault();
});