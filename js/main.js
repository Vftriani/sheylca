const buttons = document.querySelectorAll(".navbar button");
const sections = document.querySelectorAll(".section");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    // reset
    sections.forEach(sec => sec.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    // aktifkan
    document.getElementById(button.dataset.section).classList.add("active");
    button.classList.add("active");
  });
});

// autoplay music (fix browser)
document.body.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
}, { once: true });