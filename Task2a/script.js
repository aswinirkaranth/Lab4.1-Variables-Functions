/* Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”
*/

//DOM
let totalcost = document.getElementById("TotalCost-btn");

//Event listener
// Since values are empty before event listener, using anonymus functions.
totalcost.addEventListener("click",function(){  
let price = document.getElementById("price-num").value;
let quantity = document.getElementById("quantity-num").value;
let taxRate = document.getElementById("taxrate-num").value;
console.log(price,quantity,taxRate);
calculateTotalCost(price,quantity,taxRate);
});

function calculateTotalCost(price,quantity,taxRate){
    // Evaluate if valid input

    //Calculate Total cost
 totalcost.value = (price * quantity) * (1 + taxRate);
}