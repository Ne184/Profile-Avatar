import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let template = document.createElement("div");
  template.classList.add("image");
  template.addEventListener("click", function () {
    template.style.transform = "scale(2, 2)";
  });
  document.body.appendChild(template);
});
