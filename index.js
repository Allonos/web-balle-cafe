const burger = document.getElementById("burger");
const sidebar = document.getElementById("navSidebar");
const overlay = document.getElementById("navOverlay");
const sidebarClose = document.getElementById("sidebarClose");
const tabs = document.querySelectorAll(".menu__tab");
const menuCards = document.querySelectorAll(".menu-card");

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

console.log(tabs);
console.log(menuCards);

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (t) {
      t.classList.remove("menu__tab--active");
    });
    tab.classList.add("menu__tab--active");

    const selected = tab.dataset.tab;

    menuCards.forEach(function (card) {
      if (card.dataset.category === selected) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

tabs[0].click();
