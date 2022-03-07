// Assignment code here
function generatePassword() {

  window.alert("Welcome to the password generator! Just a few questions to make your perfect password!")

  getPasswordLength();

  passwordQuestions();

}

function passwordQuestions() {

  var numConfirm = window.confirm("Do you want numbers in your password?");
  var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(arrayNum);
  if (numConfirm) {
    window.alert("Numbers will be added to your password.");
  } else {
    window.alert("No numbers will be added to you password.")
  }

  var specCharacter = window.confirm("Do you want special characters in your password?");
  var arraySpecChar = ['!', '"', '#', '$', '%', '&', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
  console.log(arraySpecChar);
    if (specCharacter) {
      window.alert("Special characters will be added to your password.");
    } else {
      window.alert("No special characters will be added to your password.");
    }

  var lowCharacter = window.confirm("Do you want lowercase characters in your password?");
  var arrayLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  console.log(arrayLow);
    if (lowCharacter) {
      window.alert("Lower case characters will be added to your password.");
    } else {
      window.alert("Lower case characters will not be added to your password.");
    }

  var upCharacter = window.confirm("Do you want uppercase characters in your password?");
  var arrayUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  console.log(arrayUp);
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

var getPasswordLength = function() {
  var length = "";

  while (length === "" || length === null || length > 128 || length < 8) {
    length = prompt("How long do you want your password to be? Choose a number between 8 and 128.");
  }
  console.log("Password length is " + length);
  return length;
  // else {
  //   window.alert("You need to provide a valid number! Please try again.");
  //   return getPasswordLength();
  // }

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
