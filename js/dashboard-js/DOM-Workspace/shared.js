export const createRemoveButton = (element) => {
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "-";

  return remove;
};
