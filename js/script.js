// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika tickets di klik

document.querySelector("#tickets").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar close nav

const tickets = document.querySelector("#tickets");

document.addEventListener("click", function (e) {
  if (!tickets.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
