const ola = document.getElementById("1");
const diran = document.querySelector(".input");

let displayedNumber = null;

ola.addEventListener("click", () => {
  displayedNumber = 1;
  diran.textContent = displayedNumber;
});
