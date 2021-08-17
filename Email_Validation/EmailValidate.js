var prompt=require("prompt-sync")();
//email regex for validation
var emailId=prompt("enter a emailid: ");
var emailRegex = RegExp("(^[a-z]+)(([\. \+ \-]?[a-z A-Z 0-9])*)@(([0-9 a-z]+[\.]+[a-z]{3})+([\.]+[a-z]{2,3})?$)");

    if(emailRegex.test(emailId))
    {
        console.log("Valid EmailId");
    }
    else
    {
        console.log("Invalid EmailId");
    }
