// Interactive greeting based on time
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header p");
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning, anime fans!";
  } else if (hours < 18) {
    greeting = "Good afternoon, anime lovers!";
  } else {
    greeting = "Good evening, anime enthusiasts!";
  }

  header.textContent = `${greeting} Explore your favorite anime: Naruto, One Piece, and Bleach!`;
});