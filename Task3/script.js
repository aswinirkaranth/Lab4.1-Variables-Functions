/*Task 3: Functions with Conditional Logic
Write a function called checkEligibility that takes two parameters: age and isEmployed. 
The function should check if a person is eligible for a program based on the following rules:
If the person is over 18 and employed, they are eligible.
If the person is over 18 but unemployed, they are conditionally eligible.
If the person is 18 or younger, they are not eligible.
Return an appropriate string message for each scenario.*/

//DOM and eventhandler
let Eligibility = document.getElementById("eligibility-btn");
Eligibility.addEventListener("click" , function(){
  let age= document.getElementById("age-input");
  let checkbox = document.getElementById("checkbox-input");
  checkEligibility(age.value, checkbox.checked);
});

function checkEligibility(age , isEmployed){

  let Eligible = document.getElementById("result");
  

  if((age >18) && (isEmployed === true)){
     Eligible.innerText = "Eligible";
  }
 else if((age >18) && (isEmployed === false)){
    Eligible.innerText = "Conditional";
  }
  else{
     Eligible.innerText = "Not eligible";
  }
 
}