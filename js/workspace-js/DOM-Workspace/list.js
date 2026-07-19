import { createRemoveButton } from "./shared.js";

export const createListElement = (listData) => {
  const list = document.createElement("div");
  list.classList.add("list");

  const listContentContainer = createListContentContainerElement();

  list.append(
    createListTitleContainerElement(list, listData),
    listContentContainer,
    createListActionsContainerElement(listContentContainer),
  );

  list.dataset.id = listData.id;

  listData.content.forEach((task) => {
    listContentContainer.append(createListContentAllElement());
  });

  return list;
};

const createListActionsContainerElement = (listContentContainer) => {
  const listActionsContainer = document.createElement("div");
  listActionsContainer.classList.add("listActionsContainer");

  listActionsContainer.append(
    createAddListContentButton(listContentContainer),
    createRemoveListContentButton(listContentContainer),
  );

  return listActionsContainer;
};

const createAddListContentButton = () => {
  const addListContent = document.createElement("button");
  addListContent.classList.add("addListContent");
  addListContent.textContent = "+ Add";

  return addListContent;
};

export function createListContentAllElement() {
  const contentCompleteContainer = createContentCompleteContainerElement();
  const content = createContentElement();
  const complete = createCompleteButton();

  contentCompleteContainer.append(content, complete);

  return contentCompleteContainer;
}

const createRemoveListContentButton = (listContentContainer) => {
  const removeListContent = document.createElement("button");
  removeListContent.classList.add("removeListContent");
  removeListContent.textContent = "- Remove";
  /* 
  removeListContent.addEventListener("click", () => {
    const lastContent = listContentContainer.lastElementChild;

    if (lastContent) {
      lastContent.remove();
    }
  }); */

  return removeListContent;
};

const createListTitleContainerElement = (list, listData) => {
  const listTitleContainer = document.createElement("div");
  listTitleContainer.classList.add("listTitleContainer");

  const remove = createRemoveButton(list);
  const listTitle = createListTitleInput();
  listTitle.value = listData.title;

  listTitleContainer.append(listTitle, remove);

  return listTitleContainer;
};

const createListContentContainerElement = () => {
  const listContentContainer = document.createElement("div");
  listContentContainer.classList.add("listContentContainer");

  return listContentContainer;
};

const createListContentElement = (listData) => {
  const content = document.createElement("input");
  content.classList.add("content");
  content.value = listData.content.content;

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
