const html = document.querySelector("html");
const checkbox = document.querySelector("input");

console.log("Hello");

Input.addEventListener("change", function () {
  html.classList.toggle("dark");
});
