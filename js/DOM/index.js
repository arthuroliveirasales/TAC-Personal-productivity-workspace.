/* geral actions */

document.addEventListener("click", (e) => {
  if (!e.target.closest(".options")) {
    document
      .querySelectorAll(".popUp")
      .forEach((popUp) => popUp.classList.remove("visible"));
  }
});

/* =================== */
/* Add card =========================== */
import { createCard } from "./card.js";

const cardContainer = document.querySelector(".cardContainer");

const addCard = document.querySelector(".addCard");
addCard.addEventListener("click", () => {
  cardContainer.append(createCard());
});
