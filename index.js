const burger = document.getElementById("burger");
const sidebar = document.getElementById("navSidebar");
const overlay = document.getElementById("navOverlay");
const sidebarClose = document.getElementById("sidebarClose");

function openMenu() {
  burger.classList.add("is-open");
  sidebar.classList.add("is-open");
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  burger.classList.remove("is-open");
  sidebar.classList.remove("is-open");
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

burger.addEventListener("click", function () {
  const isOpen = sidebar.classList.contains("is-open");
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);
sidebarClose.addEventListener("click", closeMenu);
