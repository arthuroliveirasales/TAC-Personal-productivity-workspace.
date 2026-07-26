const startButton = document.querySelector(".startButton");
const plannerButton = document.querySelector(".plannerButton");
const startButtonImage = document.querySelector(".startButtonImage");
const plannerButtonImage = document.querySelector(".plannerButtonImage");

const workspaceAll = document.querySelector(".workspaceAll");
const plannerAll = document.querySelector(".plannerAll");

export function plannerButtonClick() {
  plannerButton.addEventListener("click", () => {
    workspaceAll.classList.add("defocus");
    plannerAll.classList.remove("defocus");

    togglePlannerButtonImg();
    toggleStartButtonImg();
  });
}
export function startButtonClick() {
  startButton.addEventListener("click", () => {
    workspaceAll.classList.remove("defocus");
    plannerAll.classList.add("defocus");

    startButton.classList.toggle("actived");

    toggleStartButtonImg();
    togglePlannerButtonImg();
  });
}
function toggleStartButtonImg() {
  if (workspaceAll.classList.contains("defocus")) {
    startButtonImage.src = "assets/icons/dashboard/start.png";
  } else {
    startButtonImage.src = "assets/icons/dashboard/start-clicked.png";
  }
}

function togglePlannerButtonImg() {
  if (plannerAll.classList.contains("defocus")) {
    plannerButtonImage.src = "assets/icons/dashboard/planner.png";
  } else {
    plannerButtonImage.src = "assets/icons/dashboard/planner-clicked.png";
  }
}
