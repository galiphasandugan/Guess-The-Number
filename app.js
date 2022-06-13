const buton = document.querySelector(".btn");
const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const input = document.querySelector(".input");
const sonuc = document.querySelector(".sonuc");

buton.addEventListener("click", () => {
  console.log(input.value.type);

  if (input.value > random) {
    sonuc.value = "sayıyı azalt";
  }
  if (input.value < random) {
    sonuc.value = "sayıyı artır";
  }
  if (input.value == random) {
    sonuc.value = "KAZANDIN";
  }
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    buton.click();
  }
});

window.addEventListener("load", (e) => {
  input.focus();
});
