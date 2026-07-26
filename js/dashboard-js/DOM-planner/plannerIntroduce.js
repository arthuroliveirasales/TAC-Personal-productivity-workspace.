const openPlannerButton = document.querySelector(".openPlanner");

const plannerIntroducePage = document.querySelector(".plannerIntroducePage");
const plannerContent = document.querySelector(".plannerContent");

export function openPlannerAction() {
  openPlannerButton.addEventListener("click", () => {
    plannerIntroducePage.classList.add("defocus");
    plannerContent.classList.remove("defocus");
  });
}
