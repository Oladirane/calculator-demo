const ola = document.getElementById("1");
const ola2 = document.getElementById("2");
const ola3 = document.getElementById("3");
const diran = document.querySelector(".input");

// const numberOfTimes = 1;

ola.addEventListener("click", () => {
  for (let i = 0; i < '1'; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${'1'} `;
    diran.appendChild(numberElement);
  }
});

ola2.addEventListener("click", () => {
  for (let i = 0; i < '1'; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${'2'} `;
    diran.appendChild(numberElement);
  }
});

// let displayedNumber = null;

// ola2.addEventListener("click", () => {
//   displayedNumber = 2;
//   diran.textContent = displayedNumber;
// });

// ola.addEventListener("click", () => {
//   displayedNumber = 1;
//   diran.textContent = displayedNumber;
// });

// ola3.addEventListener("click", () => {
//   displayedNumber = 3;
//   diran.textContent = displayedNumber;
// });
