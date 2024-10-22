// togel menghilangkan yang ada, yang ada dihilangkan
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan navbar
const humberger = document.querySelector("#humberger-menu");
document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
