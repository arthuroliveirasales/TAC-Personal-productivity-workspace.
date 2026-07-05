/* Store Card */
let cards = [];

function saveCarda() {
  localStorage.set("cards", JSON.stringify(cardArray));
}
function load() {
  cards = JSON.parse(localStorage.get("cards")) || [];
}

load();
/* =============== */

/* Storage Title */

cardTItle.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const title = cardTitle.value.trim();
  if (!title) return;

  const card = { id: crypto.randomUUID(), title };

  cards.push(card);

  saveCards();

  cardTitle.value = "";
});

/* ================= */
/* Find Card */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".card")) return;
  const id = card.dataset.id;
  const card = cards.find((card) => card.id === id);
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
