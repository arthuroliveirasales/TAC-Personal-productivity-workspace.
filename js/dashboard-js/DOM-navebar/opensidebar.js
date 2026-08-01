const openSidebar = document.querySelector(".openSidebar");
const sidebar = document.querySelector(".sidebar");
const openSideBarImg = document.querySelector(".openSideBarImg");

export function initSidebar() {
  openSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("visible");
    openSidebar.classList.toggle("actived");

    if (openSidebar.classList.contains("actived")) {
      openSideBarImg.src = "assets/icons/dashboard/close-sidebar.png";
    } else {
      openSideBarImg.src = "assets/icons/dashboard/open-sidebar.png";
    }
  });
}
