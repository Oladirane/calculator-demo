const ola = document.getElementById("1");
const ola2 = document.getElementById("2");
const ola3 = document.getElementById("3");
const diran = document.querySelector(".input");

// let displayedNumber = null;

ola.addEventListener("click", () => {
  displayedNumber = 1;
  diran.textContent = displayedNumber;
});

ola2.addEventListener("click", () => {
  displayedNumber = 2;
  diran.textContent = displayedNumber;
});

ola3.addEventListener("click", () => {
  displayedNumber = 3;
  diran.textContent = displayedNumber;
});
