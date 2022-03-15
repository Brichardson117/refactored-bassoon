//global variables
var specialCharArry = ["!", '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[',  ']', '^', '_', '`', '{', '|', '}', '~' ];
var choiceArry = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbArry = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var passLengthSelect = 8;
var lettersCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    passwordPrompts ()

  if (passwordPrompts) {
  var newpassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newpassword;
    }
}

function generatePassword () {
    var password = "";

    for(var i = 0; i < passLengthSelect; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArry.length);
        password = password + choiceArry[randomIndex]
    }
    return password
}

function passwordPrompts () {
    choiceArry = [];
    passLengthSelect = parseInt(window.prompt("How long will you like you password to be? Please type a value between 8 characters and 128 characters long only."));

  if(isNaN(passLengthSelect) || passLengthSelect < 8 || passLengthSelect >128) {
    window.alert("Please check your input, and try again.")
    return false
  }
 if (confirm("Do you want lowercase letter?")); {
   choiceArry = choiceArry.concat(letters);
 }

 if (confirm("Do you want Uppercase letter?")); {
  choiceArry = choiceArry.concat(lettersCap);
}
 if (confirm("Do you want to include numbers?")); {
  choiceArry = choiceArry.concat(numbArry);
}
 if (confirm("Do you want to include special characters?")); {
  choiceArry = choiceArry.concat(specialCharArry);
}
return true;
}








  