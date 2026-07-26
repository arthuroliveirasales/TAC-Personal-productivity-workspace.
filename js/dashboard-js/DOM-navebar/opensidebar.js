const openSidebar = document.querySelector(".openSidebar");
const sidebar = document.querySelector(".sidebar");

export function initSidebar() {
  openSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("visible");
    openSidebar.classList.toggle("actived");

    if (openSidebar.classList.contains("actived")) {
      openSidebar.textContent = "-";
    } else {
      openSidebar.textContent = "+";
    }
  });
}
