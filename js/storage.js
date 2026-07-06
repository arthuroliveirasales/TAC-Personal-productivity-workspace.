/* Store Card */
let cards = [];

function saveCards() {
  localStorage.setItem("cards", JSON.stringify(cards));
}
function load() {
  cards = JSON.parse(localStorage.getItem("cards")) || [];
}

load();
/* =============== */

/* Storage Title */

cardTItle.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const title = cardTitle.value.trim();
  if (!title) return;

  const card = {
    id: crypto.randomUUID(),
    title,
  };

  cards.push(card);

  saveCards();

  //function render

  cardTitle.value = "";
});

/* ================= */
/* Find Card */
document.addEventListener("click", (e) => {
  const cardElement = e.target.closest(".card");
  if (!cardElement) return;
  const id = card.dataset.id;
  const cardData = cards.find((card) => card.id === id);
});

/* Note List */

inputContent.addEventListener("blur", () => {
  if (!inputContent.value) return;
});

/* ================== */

/* inputContent.addEventListener;

listTitle.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  listTitle = listTitle.value.trim();

  if (!listTitle) return;
  list.push({ titulo: listTitle });
});
 */
