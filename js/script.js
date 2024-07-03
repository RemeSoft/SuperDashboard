const main = document.querySelector("main");
const sidebar = document.querySelector("aside");

function openSidebar() {
  main.classList.toggle("left-[250px]");
  sidebar.classList.toggle("left-[-250px]");
}
