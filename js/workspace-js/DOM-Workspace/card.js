/* create card ====================================== */
import { createPopUpElement } from "./popup.js";
import { createListElement } from "./list.js";
import { createNoteElement } from "./note.js";

export function createCardElement(cardData) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.dataset.id = cardData.id;

  const cardContentElement = createCardContentElement();
  const cardTop = createCardTopElement();
  const titleElement = createTitleElement(cardData);
  const optionsContainer = createOptionsContainerElement();
  const popUp = createPopUpElement(cardElement, cardContentElement);
  const options = createOptionsButton(popUp);

  optionsContainer.append(options, popUp);
  cardTop.append(titleElement, optionsContainer);
  cardElement.append(cardTop, cardContentElement);

  return cardElement;
}
export const createCardContentElement = () => {
  const cardContentElement = document.createElement("div");
  cardContentElement.classList.add("cardContentElement");

  return cardContentElement;
};

/* Options ============================================*/

const createOptionsContainerElement = () => {
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("optionsContainer");

  return optionsContainer;
};

const createOptionsButton = (popUp) => {
  const options = document.createElement("button");
  options.classList.add("options");
  options.textContent = "...";

  options.addEventListener("click", () => {
    popUp.classList.toggle("visible");
  });

  return options;
};

/* Title ============================================*/

const createCardTopElement = () => {
  const cardTop = document.createElement("div");
  cardTop.classList.add("cardTop");

  return cardTop;
};

const createTitleElement = (cardData) => {
  const titleElement = document.createElement("input");
  titleElement.classList.add("title");
  titleElement.value = cardData.title;
  titleElement.placeholder = "Title";
  return titleElement;
};

/* ====================================================== */
