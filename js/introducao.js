const toggleButtons = document.querySelectorAll(".toggle-button");
toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");
    const isContentVisible = content.style.display === "block";
    content.style.display = isContentVisible ? "none" : "block";
    arrow.classList.toggle("down", !isContentVisible);
  });
});
