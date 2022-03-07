// Assignment code here
function generatePassword() {

  window.alert("Welcome to the password generator! Just a few questions to make your perfect password!")

  passwordLength();

  passwordQuestions();

}

function passwordQuestions() {

  var numConfirm = window.confirm("Do you want numbers in your password?");
  if (numConfirm) {
    window.alert("Numbers will be added to your password.");
  } else {
    window.alert("No numbers will be added to you password.")
  }

  var specCharacter = window.confirm("Do you want special characters in your password?");
    if (specCharacter) {
      window.alert("Special characters will be added to your password.");
    } else {
      window.alert("No special characters will be added to your password.");
    }

  var lowCharacter = window.confirm("Do you want lowercase characters in your password?");
    if (lowCharacter) {
      window.alert("Lower case characters will be added to your password.");
    } else {
      window.alert("Lower case characters will not be added to your password.");
    }

  var upCharacter = window.confirm("Do you want uppercase characters in your password?");
    if (upCharacter) {
      window.alert("Upper case characters will be added to your password.");
    } else {
      window.alert("Upper case characters will not be added to your password.");
    }
    if (numConfirm || specCharacter || lowCharacter || upCharacter) {
      window.alert("Making your perfect password...");
    } else {
    window.alert("You must choose at least one option! Please try again.");
    return passwordQuestions();
    }
}

var passwordLength = function() {
  var promptLength = window.prompt("How long do you want your password to be? Choose a number between 8 and 128.");
  if (promptLength === "" || promptLength === null || promptLength > 128 || promptLength < 8) {
    window.alert("You need to provide a valid number! Please try again.");
    return passwordLength();
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
