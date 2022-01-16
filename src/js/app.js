import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let template = document.createElement("div");
  template.classList.add("image");
  document.body.appendChild(template);
});
window.onload = () => {
  var temp = document.querySelector("div");
  temp.addEventListener("click", function () {
    temp.style.transform = "scale(2, 2)";
  });
  }
