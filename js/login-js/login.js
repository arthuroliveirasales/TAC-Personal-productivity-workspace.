const toggleSwitch = document.querySelector(".toggle-switch");
const toggleBtns = document.querySelectorAll(".toggle-btn");
const panels = {
  login: document.getElementById("login-panel"),
  signup: document.getElementById("signup-panel"),
};

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    toggleBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    toggleSwitch.classList.toggle("signup", target === "signup");

    Object.keys(panels).forEach((key) => {
      panels[key].classList.toggle("hidden", key !== target);
    });
  });
});

// Evita reload de página nos forms — ainda não tem backend
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => e.preventDefault());
});

/**
 * Hook de microinteração pra usar na sua validação.
 * Chame shakeField(inputGroupEl) quando detectar um campo inválido.
 * Exemplo:
 *   const emailGroup = document.getElementById('login-email').closest('.input-group');
 *   if (!emailValido) shakeField(emailGroup);
 */
function shakeField(inputGroupEl) {
  inputGroupEl.classList.add("shake");
  inputGroupEl.addEventListener(
    "animationend",
    () => {
      inputGroupEl.classList.remove("shake");
    },
    { once: true },
  );
}
