// Define the correct password
const correctPassword = "birthday123"; // Change this to your desired password

// Add event listener to the login button
document.getElementById("login-btn").addEventListener("click", function () {
  const enteredPassword = document.getElementById("password-input").value;
  const errorMessage = document.getElementById("error-message");

  // Check if the entered password matches the correct password
  if (enteredPassword === correctPassword) {
    // Hide the login screen
    document.getElementById("login-screen").style.display = "none";

    // Redirect to the main page (index.html)
    window.location.href = "index.html";
  } else {
    // Show error message if password is incorrect
    errorMessage.style.display = "block";
  }
});
