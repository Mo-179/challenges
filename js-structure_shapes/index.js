console.clear();
import getRandomColor from "./utils/randomColor.js";

const root = document.getElementById("root");
import Circle from "./components/Circle/Circle.js";
const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

root.append(Circle, square, pentagon);
