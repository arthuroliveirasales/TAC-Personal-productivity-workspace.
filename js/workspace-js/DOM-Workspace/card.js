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
  const title = createTitleElement();
  const optionsContainer = createOptionsContainerElement();
  const popUp = createPopUpElement(cardElement, cardContentElement);
  const options = createOptionsButton(popUp);

  optionsContainer.append(options, popUp);
  cardTop.append(title, optionsContainer);
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

const createTitleElement = () => {
  const title = document.createElement("input");
  title.classList.add("title");
  title.placeholder = "Title";

  return title;
};

/* ====================================================== */
