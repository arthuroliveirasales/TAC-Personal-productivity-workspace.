import { saveData } from "./storage.js";
import { loadData } from "./storage.js";
import { clearData } from "./storage.js";

import { createCardElement } from "./DOM-Workspace/card.js";

const cardContainer = document.querySelector(".cardContainer");

let cards = loadData();
cards.forEach((card) => {
  cardContainer.append(createCardElement(card));
});

function createCardData() {
  const cardData = {
    id: crypto.randomUUID(),
    title: "title",
    content: [],
  };
  cards.push(cardData);
  saveData(cards);

  return cardData;
}

const addCard = document.querySelector(".addCard");
addCard.addEventListener("click", (card) => {
  const cardData = createCardData();
  cardContainer.append(createCardElement(cardData));
});

/* clearData(); */

document.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".deleteCard");

  if (!deleteBtn) return;

  const card = deleteBtn.closest(".card");
  const id = card.dataset.id;

  cards = cards.filter((card) => card.id !== id);

  saveData(cards);
  card.remove();
});
