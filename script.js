// Function to initialize the application
function initializeApp() {
  showScreen("loading");
  simulateLoading();
  addEventListeners();
}

// Function to simulate loading screen
function simulateLoading() {
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.querySelector(".progress-text");
  const loadingText = document.querySelector(".loading-text");
  const loadingScreen = document.getElementById("loading-screen");

  let progress = 0;
  const loadingMessages = [
    "&gt; INITIALIZING..._",
    "&gt; LOADING MEMORIES..._",
    "&gt; PREPARING SURPRISE..._",
    "&gt; ALMOST READY..._",
    "&gt; LOADING COMPLETE!_",
  ];

  let messageIndex = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5; // Random increment between 5-20

    if (progress > 100) progress = 100;

    // Update progress bar with smooth animation
    progressFill.style.width = progress + "%";
    progressText.textContent = Math.floor(progress) + "%";

    // Update loading message based on progress
    const newMessageIndex = Math.floor(
      (progress / 100) * (loadingMessages.length - 1)
    );
    if (
      newMessageIndex !== messageIndex &&
      newMessageIndex < loadingMessages.length
    ) {
      messageIndex = newMessageIndex;

      // Fade out current message
      loadingText.style.opacity = "0";

      setTimeout(() => {
        loadingText.innerHTML = loadingMessages[messageIndex];
        loadingText.style.opacity = "1";
      }, 200);
    }

    if (progress >= 100) {
      clearInterval(interval);

      // Add completion animation
      loadingScreen.classList.add("loading-complete");

      // Wait for completion animation, then transition
      setTimeout(() => {
        transitionToMainScreen();
      }, 1000);
    }
  }, 200);
}

// Function to show the main screen after loading is complete
function transitionToMainScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  const mainScreen = document.getElementById("main-screen");

  // Start fade out animation for loading screen
  loadingScreen.classList.add("fade-out");

  // After fade out completes, show main screen
  setTimeout(() => {
    loadingScreen.classList.remove("active", "fade-out", "loading-complete");

    // Show main screen with entrance animation
    mainScreen.classList.add("active", "screen-entering");

    // Initialize the main screen
    initializeMainScreen();
  }, 600);
}

function initializeMainScreen() {
  // Add event listeners for menu buttons or other features
  const menuButtons = document.querySelectorAll(".menu-btn");
  menuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Functionality for menu buttons
    });
  });
}
