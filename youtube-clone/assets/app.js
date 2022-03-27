//lấy div .menu-icon
const menuIcon = document.querySelector(".sidebar-large");
const overlay = document.querySelector(".overlay");
const inputSearch = document.querySelector(".search-icon");

function showSidebar() {
  if (menuIcon.classList.contains("active")) {
    menuIcon.classList.remove("active");
  } else menuIcon.classList.add("active");
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
  } else overlay.classList.add("active");
  //   console.log("aaaa");
}

function fucusInput() {
  if (inputSearch.classList.contains("active")) {
    inputSearch.classList.remove("active");
  } else inputSearch.classList.add("active");
}
