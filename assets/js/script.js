// Assignment code here

// Arrays for Passwords.
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-" , "=", "+", "[", "]", "{", "}", ",", ".", "/", "?", "<", ">"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declarations that will check character type and validate length of character.
var checkLength = [];
var checkNumeric;
var checkSpecialCharacters;
var checkLowercase;
var checkUppercase;

// Asks the users how many characters they would like to have for their password. 
function generatePassword() {
  var checkLength = prompt("Please enter how many characters you would like to have for your password. Choose between 8 characters and 128 characters.");

  /* Alerts the users if their password does not meet the password length criteria. 
  While loop allows to iterate over a block of code as long as the conditions are satisfied. */
  while (checkLength <= 7 || checkLength >= 128) {
    alert("Your password length must be between 8 characters and 128 characters. Please try again.");
    var checkLength = prompt("Please enter how many characters you would like to have for your password. Choose between 8 characters and 128 characters.");
  }
    // Lets users know how many characters their password will have if they entered between 8 and 128 characters.
    alert(`Your password will contain ${checkLength} characters.`);

  // Asks users if they would like to add numeric, special characters, lowercase alphabets, uppercase alphabets to their password. 
  var checkNumeric = confirm("Click OK if you would like to include numeric character(s) to your password.");
  var checkSpecialCharacters = confirm("Click OK if you would like to include special character(s) to your password.");
  var checkLowercase = confirm("Click OK if you would like to include lowercase alphabet character(s) to your password.");
  var checkUppercase = confirm("Click OK if you would like to include uppercase alphabet character(s) to your password.");

  /* Alerts the users if they do not select any character types for their password. It will allow users to go back so that 
  they can select desired character types for their password. */
  while (checkNumeric === false && checkSpecialCharacters === false && checkLowercase === false && checkUppercase === false) {
    alert("Your password must have at least one character type that must be selected. Please try again!")
    var checkNumeric = confirm("Click OK if you would like to include numeric character(s) to your password.");
    var checkSpecialCharacters = confirm("Click OK if you would like to include special character(s) to your password.");
    var checkLowercase = confirm("Click OK if you would like to include lowercase alphabet character(s) to your password.");
    var checkUppercase = confirm("Click OK if you would like to include uppercase alphabet character(s) to your password.");
  }
 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
