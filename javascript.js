const show = document.getElementById("menu-bar");
const icon = document.getElementById("menu-icon");

icon.addEventListener("click", function () {
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
});
