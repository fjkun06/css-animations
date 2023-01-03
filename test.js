const x = Array.from(document.querySelectorAll(".test"));
const btn = document.querySelector("button");
let boo = true;

btn.addEventListener("click", () => {
  console.log("clicked");
  if (boo) {
    x.forEach((slide) => (slide.style.animationPlayState = "paused"));
    btn.textContent = "Paused...";
    boo = false;
  } else {
    x.forEach((slide) => (slide.style.animationPlayState = "running"));
    boo = true;
    btn.textContent = "Playing...";
  }
});
console.log(x, btn);
