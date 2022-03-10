// Assignment code here
function generatePassword() {

  window.alert("Welcome to the password generator! Just a few questions to make your perfect password!")

  passwordQuestions();

  // return generated password
  return password;

};


function passwordQuestions() {

  var length = " ";

  while (length === "" || length === null || length > 128 || length < 8) {
    length = prompt("How long do you want your password to be? Choose a number between 8 and 128.");
  };
  var usableCharacters = "";

  var numConfirm = window.confirm("Do you want numbers in your password?");
  if (numConfirm) {
    window.alert("Numbers will be added to your password.")
    usableCharacters += "1234567890";
  } else {
    window.alert("No numbers will be added to you password.")
  }

  var specCharacter = window.confirm("Do you want special characters in your password?");
    if (specCharacter) {
      window.alert("Special characters will be added to your password.")
      usableCharacters += "`~!@#$%^&*()_-+={}[]:;'?/><|";
    } else {
      window.alert("No special characters will be added to your password.");
    }

  var lowCharacter = window.confirm("Do you want lowercase characters in your password?");
    if (lowCharacter) {
      window.alert("Lower case characters will be added to your password.")
      usableCharacters += "abcdefghijklmnopqrstuvwxyz";
    } else {
      window.alert("Lower case characters will not be added to your password.");
    }

  var upCharacter = window.confirm("Do you want uppercase characters in your password?");
    if (upCharacter) {
      window.alert("Upper case characters will be added to your password.")
      usableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      window.alert("Upper case characters will not be added to your password.");
    }
    if (numConfirm || specCharacter || lowCharacter || upCharacter) {
      window.alert("Making your perfect password...");
    } else {
    window.alert("You must choose at least one option! Please try again.");
    return passwordQuestions();
    }
console.log(usableCharacters);

  password = "";
  for (var i = 0; i < length; i++) {
    password += usableCharacters[Math.floor(Math.random() * length)];
}
  return password;
};

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
