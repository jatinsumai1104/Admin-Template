var navbar = document.getElementById("menu-list");
var toggle = false;
function toggleNavbar() {
  toggle = !toggle;
  if (toggle) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}
