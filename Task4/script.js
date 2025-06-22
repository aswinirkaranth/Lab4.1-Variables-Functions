/*Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
If no discount is provided, calculate the total cost as before. */

//DOM
let totalcost=document.getElementById("TotalCost-btn");
let cost=document.getElementById("Cost");

//Event listener
// Since values are empty before event listener, using anonymus functions.
totalcost.addEventListener("click", function() {
        let price=document.getElementById("price-num").value;
        let quantity=document.getElementById("quantity-num").value;
        let taxRate=document.getElementById("taxrate-num").value;
        
        console.log(price, quantity, taxRate);
        calculateTotalCost(price, quantity, taxRate);
    });

function calculateTotalCost(price, quantity, taxRate) {

    // Evaluate if valid input
    if(isNaN(price) || isNaN(quantity)|| isNaN(taxRate)) {
        console.log("Invalid input");
        cost.value="Invalid input";
        return;
    }
let discount=document.getElementById("discount-num").value;

    //Calculate Total cost 
    if(discount !=0){
      cost.innerText=((price * quantity) - discount) * (1 + taxRate);
    console.log(cost.value); 
    }
   else{ 
    cost.innerText=(price * quantity) * (1 + taxRate);
    console.log(cost.value);
   }
}
