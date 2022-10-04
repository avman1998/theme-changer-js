const containerEle = document.querySelector("body");
const themeEle = document.querySelector("#container div button");
let changer = false; //Light Theme

themeEle.addEventListener("click", function () {
  changer = !changer;
  if (!changer) {
    containerEle.classList.add("light");
    containerEle.classList.remove("dark");
    themeEle.style.backgroundColor = "#044a5f";
    themeEle.style.color = "#a1e6fb";
    themeEle.innerHTML = "Dark 🌚";
  } else {
    containerEle.classList.add("dark");
    containerEle.classList.remove("light");
    themeEle.style.backgroundColor = "#a1e6fb";
    themeEle.style.color = "#044a5f";
    themeEle.innerHTML = "Light 🌞";
  }
});
