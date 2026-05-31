const burger = document.getElementById("burger");
const sidebar = document.getElementById("navSidebar");
const overlay = document.getElementById("navOverlay");
const sidebarClose = document.getElementById("sidebarClose");
const tabs = document.querySelectorAll(".menu__tab");
const menuCards = document.querySelectorAll(".menu-card");
const contactForm = document.getElementById("contactForm");

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

if (tabs.length > 0) {
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
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    [name, email, message].forEach(function (field) {
      field.classList.remove("contact__input--error");
    });
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      name.classList.add("contact__input--error");
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
      emailError.textContent = "Please enter your email.";
      email.classList.add("contact__input--error");
      valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email.";
      email.classList.add("contact__input--error");
      valid = false;
    }

    if (message.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      message.classList.add("contact__input--error");
      valid = false;
    }

    if (valid) {
      alert(
        "Message received!\n\n" +
          "Name: " +
          name.value.trim() +
          "\n" +
          "Email: " +
          email.value.trim() +
          "\n" +
          "Message: " +
          message.value.trim(),
      );
      contactForm.reset();
    }
  });
}
