import { saveData } from "./storage.js";
import { loadData } from "./storage.js";
import { clearData } from "./storage.js";

let cards = loadData();

const addCard = document.querySelector(".addCard");
addCard.addEventListener("click", () => {
  const newCard = {
    id: crypto.randomUUID(),
    title: "title",
    content: [],
  };
  cards.push(newCard);
  saveData(cards);
});

/* clearData(); */
document.addEventListener("click", (e) => {
  const button = e.target.closest(".deleteCard");
  if (!button) return;
  console.log("ola324");
  const card = button.closest(".card");
  const id = card.dataset.id;

  cards = cards.filter((card) => card.id !== id);

  saveData(cards);
  card.remove();
});
