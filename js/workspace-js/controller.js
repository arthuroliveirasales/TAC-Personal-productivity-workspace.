import { saveData } from "./storage.js";
import { loadData } from "./storage.js";
import { clearData } from "./storage.js";

import { createCardElement } from "./DOM-Workspace/card.js";
import { createListElement } from "./DOM-Workspace/list.js";
import { createListContentAllElement } from "./DOM-Workspace/list.js";

/* clearData(); */
/* Card events ========================================== */
const cardContainer = document.querySelector(".cardContainer");

let cards = loadData();
cards.forEach((card) => {
  cardContainer.append(createCardElement(card));
});

function createCardData() {
  const cardData = {
    id: crypto.randomUUID(),
    title: "",
    content: [],
  };
  cards.push(cardData);
  saveData(cards);

  return cardData;
}

/* add/delete card */
const addCard = document.querySelector(".addCard");
addCard.addEventListener("click", (card) => {
  const cardData = createCardData();
  cardContainer.append(createCardElement(cardData));
});

document.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".deleteCard");

  if (!deleteBtn) return;

  const card = deleteBtn.closest(".card");
  const id = card.dataset.id;

  cards = cards.filter((card) => card.id !== id);

  saveData(cards);
  card.remove();
});

/* title */

document.addEventListener("input", (e) => {
  const title = e.target.closest(".title");
  if (!title) return;

  const cardElement = title.closest(".card");
  const id = cardElement.dataset.id;

  const card = cards.find((card) => card.id === id);
  if (!card) return;

  card.title = title.value;
  saveData(cards);
});

/* ================================================================ */

/* list events =====================================================*/

document.addEventListener("click", (e) => {
  const addList = e.target.closest(".addList");
  if (!addList) return;

  const cardElement = addList.closest(".card");
  const cardContentElement = cardElement.querySelector(".cardContentElement");
  const id = cardElement.dataset.id;

  const card = cards.find((card) => card.id === id);
  if (!card) return;

  const listData = createListData();

  card.content.push(listData);

  saveData(cards);

  cardContentElement.append(createListElement(listData));
});

function createListData() {
  const listData = {
    id: crypto.randomUUID(),
    type: "list",
    title: "",
    content: [],
  };

  return listData;
}

document.addEventListener("input", (e) => {
  const listTitle = e.target.closest(".listTitle");
  if (!listTitle) return;

  const listElement = listTitle.closest(".list");
  const listId = listElement.dataset.id;

  const cardElement = listTitle.closest(".card");
  const cardId = cardElement.dataset.id;

  const card = cards.find((card) => card.id === cardId);
  if (!card) return;

  const list = card.content.find((list) => list.id === listId);
  if (!list) return;

  list.title = listTitle.value;
  saveData(cards);
});

document.addEventListener("click", (e) => {
  const addListContent = e.target.closest(".addListContent");
  if (!addListContent) return;

  const listElement = addListContent.closest(".list");
  const listId = listElement.dataset.id;
  const listContentContainer = listElement.querySelector(
    ".listContentContainer",
  );

  const cardElement = addListContent.closest(".card");
  const cardId = cardElement.dataset.id;

  const card = cards.find((card) => card.id === cardId);
  if (!card) return;

  const list = card.content.find((list) => list.id === listId);
  if (!list) return;

  const newTask = createListContentData();
  list.content.push(newTask);

  saveData(cards);

  listContentContainer.append(createListContentAllElement());
});
function createListContentData() {
  const newTask = {
    content: "",
    stat: false,
  };
  return newTask;
}

document.addEventListener("click", (e) => {
  const removeListContent = e.target.closest(".removeListContent");
  if (!removeListContent) return;

  const listElement = removeListContent.closest(".list");
  const listId = listElement.dataset.id;

  const cardElement = removeListContent.closest(".card");
  const cardId = cardElement.dataset.id;

  const card = cards.find((card) => card.id === cardId);
  if (!card) return;

  const list = card.content.find((list) => list.id === listId);
  if (!list) return;

  const listContentContainer = listElement.querySelector(
    ".listContentContainer",
  );

  const lastContent = listContentContainer.lastElementChild;

  if (!lastContent) return;

  list.content.pop();
  saveData(cards);

  lastContent.remove();
});
document.addEventListener("click", (e) => {
  const remove = e.target.closest(".remove");

  if (!remove) return;

  const listElement = remove.closest(".list");
  const listId = listElement.dataset.id;

  const cardElement = remove.closest(".card");
  const cardId = cardElement.dataset.id;

  const card = cards.find((card) => card.id === cardId);
  if (!card) return;

  card.content = card.content.filter((content) => content.id !== listId);

  saveData(cards);

  listElement.remove();
});
/* =================================================================== */
