var menuButton = document.querySelector(".menu-button");
var menu = document.querySelector("#menu");
var menuItems = document.querySelectorAll(".menu-item");

menuButton.onclick = toggleMenu;

if (window.innerWidth < 768) {
  menuItems.forEach(function(menuItem) {
    menuItem.onclick = toggleMenu;
  });
}


function toggleMenu() {
  if (menu.style.display == "flex") {
    menu.style.display = "none";
    menuButton.textContent = "Menu";
  } else {
    menu.style.display = "flex";
    menuButton.textContent = "Close";
  }
}