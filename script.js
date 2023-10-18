const ola = document.getElementById("1");
const ola2 = document.getElementById("2");
const ola3 = document.getElementById("3");
const ola4 = document.getElementById("4");
const ola5 = document.getElementById("5");
const ola6 = document.getElementById("6");
const ola7 = document.getElementById("7");
const ola8 = document.getElementById("8");
const ola9 = document.getElementById("9");
const ola0 = document.getElementById("0");
const olaa = document.getElementById("+");
const olad = document.getElementById("-");
const oladi = document.getElementById("/");
const oladir = document.getElementById("*");
const tosin = document.getElementById("c");
const oladiran = document.getElementById("=");
const diran = document.querySelector(".input");
const emmy = document.querySelector(".result");

oladiran.addEventListener("click", () => {
  const expressionText = diran.textContent;

  try {
    const result = eval(expressionText);
    diran.textContent = result;
  } catch (error) {
    diran.textContent = "Invalid expression";
  }
});

ola.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"1"} `;
    diran.appendChild(numberElement);
  }
});

ola2.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"2"} `;
    diran.appendChild(numberElement);
  }
});

ola3.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"3"} `;
    diran.appendChild(numberElement);
  }
});

ola4.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"4"} `;
    diran.appendChild(numberElement);
  }
});

ola5.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"5"} `;
    diran.appendChild(numberElement);
  }
});

ola6.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"6"} `;
    diran.appendChild(numberElement);
  }
});

ola7.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"7"} `;
    diran.appendChild(numberElement);
  }
});

ola8.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"8"} `;
    diran.appendChild(numberElement);
  }
});

ola9.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"9"} `;
    diran.appendChild(numberElement);
  }
});

ola0.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"0"} `;
    diran.appendChild(numberElement);
  }
});

olaa.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"+"} `;
    diran.appendChild(numberElement);
  }
});

olad.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"-"} `;
    diran.appendChild(numberElement);
  }
});

oladi.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"/"} `;
    diran.appendChild(numberElement);
  }
});

oladir.addEventListener("click", () => {
  for (let i = 0; i < "1"; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = `${"*"} `;
    diran.appendChild(numberElement);
  }
});

tosin.addEventListener("click", () => {
  diran.textContent = '';
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
