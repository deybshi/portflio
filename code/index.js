const SECRET_PASSWORD = "LOVE";

function validateLogin(event) {
  event.preventDefault();

  const passwordInput = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");
  const loginContainer = document.getElementById("login-container");
  const mainApp = document.getElementById("main-app");

  if (passwordInput === SECRET_PASSWORD) {
    loginContainer.classList.add("hidden");
    mainApp.classList.remove("hidden");
    errorMessage.textContent = "";
    document.getElementById("password").value = "";

    // Default to showing the monthsary tab on fresh login
    switchTab("monthsary");
  } else {
    errorMessage.textContent = "AY??? LINGAW NA?????😒😒😒😒";
    errorMessage.style.animation = "shake 0.3s ease-in-out";
    setTimeout(() => {
      errorMessage.style.animation = "";
    }, 300);
  }
}

// ADDED: Function to handle the burger icon click toggle
function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  const burgerToggle = document.getElementById("burger-toggle");

  navMenu.classList.toggle("open");
  burgerToggle.classList.toggle("close-icon");
}

// Tab Switching Logic
function switchTab(tabName) {
  const monthsaryTab = document.getElementById("monthsary-tab");
  const galleryTab = document.getElementById("gallery-tab");
  const songTab = document.getElementById("song-tab"); // Added target reference
  const navMonthsary = document.getElementById("nav-monthsary");
  const navGallery = document.getElementById("nav-gallery");
  const navSong = document.getElementById("nav-song"); // Added active state reference

  if (tabName === "monthsary") {
    monthsaryTab.classList.remove("hidden");
    galleryTab.classList.add("hidden");
    if (songTab) songTab.classList.add("hidden"); // Hide song tab
    navMonthsary.classList.add("active");
    navGallery.classList.remove("active");
    if (navSong) navSong.classList.remove("active");
  } else if (tabName === "gallery") {
    galleryTab.classList.remove("hidden");
    monthsaryTab.classList.add("hidden");
    if (songTab) songTab.classList.add("hidden"); // Hide song tab
    navGallery.classList.add("active");
    navMonthsary.classList.remove("active");
    if (navSong) navSong.classList.remove("active");
  } else if (tabName === "song") {
    // Added condition to completely handle showing the song tab
    if (songTab) songTab.classList.remove("hidden");
    monthsaryTab.classList.add("hidden");
    galleryTab.classList.add("hidden");
    if (navSong) navSong.classList.add("active");
    navMonthsary.classList.remove("active");
    navGallery.classList.remove("active");
  }

  // ADDED: Closes the hamburger menu panel automatically after clicking a link
  const navMenu = document.getElementById("nav-menu");
  const burgerToggle = document.getElementById("burger-toggle");
  if (navMenu && burgerToggle) {
    navMenu.classList.remove("open");
    burgerToggle.classList.remove("close-icon");
  }

  // Scroll back to top smoothly when switching tabs
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function logout() {
  // 🎵 Find all audio elements and pause them safely
  document.querySelectorAll(".song-audio").forEach((audio) => {
    if (!audio.paused) {
      audio.pause();
    }
  });

  // 🔄 Reset all play buttons text back to default
  document.querySelectorAll(".play-btn").forEach((btn) => {
    btn.innerText = "▶ PLAY";
  });

  // 🔒 Lock up the app screens perfectly
  document.getElementById("login-container").classList.remove("hidden");
  document.getElementById("main-app").classList.add("hidden");
}
//THEME SONG
// Dynamic control script for multiple song cards
document.querySelectorAll(".song-card").forEach((card) => {
  const playBtn = card.querySelector(".play-btn");
  const audio = card.querySelector(".song-audio");

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      // Optional: Pause all other playing songs first
      document.querySelectorAll(".song-audio").forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.parentElement.querySelector(".play-btn").innerText =
            "▶ PLAY";
        }
      });

      audio.play();
      playBtn.innerText = "⏸ PAUSE";
    } else {
      audio.pause();
      playBtn.innerText = "▶ PLAY";
    }
  });
});
