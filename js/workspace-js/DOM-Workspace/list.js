import { createRemoveButton } from "./shared.js";

export const createListElement = () => {
  const list = document.createElement("div");
  list.classList.add("list");

  const listContentContainer = createListContentContainerElement();

  list.append(
    createListTitleContainerElement(list),
    listContentContainer,
    createListActionsContainerElement(listContentContainer),
  );

  return list;
};
//
const createListActionsContainerElement = (listContentContainer) => {
  const listActionsContainer = document.createElement("div");
  listActionsContainer.classList.add("listActionsContainer");

  listActionsContainer.append(
    createAddListContentButton(listContentContainer),
    createRemoveListContentButton(listContentContainer),
  );

  return listActionsContainer;
};

const createAddListContentButton = (listContentContainer) => {
  const addListContent = document.createElement("button");
  addListContent.classList.add("addListContent");
  addListContent.textContent = "+ Add";

  addListContent.addEventListener("click", () => {
    const contentCompleteContainer = createContentCompleteContainerElement();
    const content = createContentElement();
    const complete = createCompleteButton();

    contentCompleteContainer.append(content, complete);

    listContentContainer.append(contentCompleteContainer);
  });

  return addListContent;
};

const createRemoveListContentButton = (listContentContainer) => {
  const removeListContent = document.createElement("button");
  removeListContent.classList.add("removeListContent");
  removeListContent.textContent = "- Remove";

  removeListContent.addEventListener("click", () => {
    const lastContent = listContentContainer.lastElementChild;

    if (lastContent) {
      lastContent.remove();
    }
  });

  return removeListContent;
};

//
const createListTitleContainerElement = (list) => {
  const listTitleContainer = document.createElement("div");
  listTitleContainer.classList.add("listTitleContainer");

  const remove = createRemoveButton(list);
  const listTitle = createListTitleInput();

  listTitleContainer.append(listTitle, remove);

  return listTitleContainer;
};
//
const createListContentContainerElement = () => {
  const listContentContainer = document.createElement("div");
  listContentContainer.classList.add("listContentContainer");

  return listContentContainer;
};

const createListContentElement = () => {
  const content = document.createElement("input");
  content.classList.add("content");

  return content;
};

const createCompleteButton = () => {
  const complete = document.createElement("button");
  complete.classList.add("complete");

  complete.addEventListener("click", () => {
    complete.classList.toggle("completed");
  });

  return complete;
};

const createListTitleInput = () => {
  const listTitle = document.createElement("input");
  listTitle.classList.add("listTitle");
  listTitle.placeholder = "Title";

  return listTitle;
};

const createContentCompleteContainerElement = () => {
  const contentCompleteContainer = document.createElement("div");
  contentCompleteContainer.classList.add("contentCompleteContainer");

  return contentCompleteContainer;
};

const createContentElement = () => {
  const content = document.createElement("input");
  content.classList.add("content");

  return content;
};
