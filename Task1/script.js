/*Task 1: Flexible String Manipulation with Functions
Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
Format the firstName and lastName so that the first letter of each is always capatilized.
Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”
 */
let namebtn = document.getElementById("Name-btn");
let capName = document.getElementById("Capitalized-name");
//let firstName = document.getElementById("fName-input").value;
//let lastName = document.getElementById("lName-input").value;

namebtn.addEventListener("click",formatFullName);


function formatFullName(){
    console.log("On click calling formatFullName");
   /*Name as entered for reference*/
   let firstName = document.getElementById("fName-input").value;
   let lastName = document.getElementById("lName-input").value;
    console.log("Name entered is : " + lastName +","+firstName);


 let finaloutput =null;
    /*Alert if first name or last name are empty*/
    if(firstName==0 || lastName ==0){
        // alert("Invalid input name ");
        //return("Invalid input name");
        finaloutput = "Invalid input name";
        capName.textContent =finaloutput;
        return; 
    }
    
    /*Capitalize and concatinate*/
        let fLetter = firstName.charAt(0).toUpperCase();
        let sLetter =  lastName.charAt(0).toUpperCase();
        let fName = fLetter + firstName.slice(1).toLowerCase();
        let sName = sLetter + lastName.slice(1).toLowerCase();
        console.log("In function to capitalize:"+ sName+","+fName);
        finaloutput = sName+","+fName;
        capName.textContent = finaloutput;
    /*Display this in web page*/
   
//    return(finaloutput);
   
}

