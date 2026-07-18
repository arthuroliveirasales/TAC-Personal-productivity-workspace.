/* geral actions */

document.addEventListener("click", (e) => {
  if (!e.target.closest(".options")) {
    document
      .querySelectorAll(".popUp")
      .forEach((popUp) => popUp.classList.remove("visible"));
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".remove, .edit")) {
    document
      .querySelectorAll(".remove")
      .forEach((remove) => remove.classList.remove("visible"));
  }
});
