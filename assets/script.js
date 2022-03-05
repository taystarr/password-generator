// Assignment code here
function generatePassword() {

  window.alert("Welcome to the password generator! Just a few questions to make your perfect password!")

  var passwordLength = window.prompt("How long do you want your password to be? Choose a number between 8 and 128.");

  var numCharacter = window.confirm("Do you want numbers in your password?");

  var specCharacter = window.confirm("Do you want special characters in your password?");

  var lowCharacter = window.confirm("Do you want lowercase characters in your password?");

  var upCharacter = window.confirm("Do you want uppercase characters in your password?");
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
