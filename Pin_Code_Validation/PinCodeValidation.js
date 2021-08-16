var prompt=require("prompt-sync")();
//UC1-,UC2,UC3->To check the pincode should contain only numbers excluding the special characters

var pincode=prompt("enter a pincode: ");
{
let pinCodeRegex=RegExp("^[1-9]{1}[0-9]{2}[0-9]{3}$");
if(pinCodeRegex.test(pincode))
{
    console.log("Given Pincode is Valid");
}
else
{
    console.log("Invalid Pincode");  
}
}
//Refactor the code -->UC4
//It accepts the space between the numbers
var pincode=prompt("enter a pincode:");
let regex = RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");
if(regex.test(pincode))
{
    console.log("Given Pincode is Valid");
}
else
{
    console.log("Invalid Pincode");  
}