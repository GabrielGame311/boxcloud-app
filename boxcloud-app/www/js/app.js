const screens = new Map(
  [...document.querySelectorAll("[data-screen]")].map((screen) => [screen.dataset.screen, screen])
);

function showScreen(name) {
  for (const [screenName, screen] of screens) {
    screen.hidden = screenName !== name;
  }
  screens.get(name)?.querySelector("input")?.focus({ preventScroll: true });
}

document.querySelectorAll("[data-open-screen]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.openScreen));
});

document.querySelectorAll("[data-account-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    message.textContent = "Account service is not connected yet. No information was sent.";
  });
});

const clock = document.getElementById("clock");
clock.textContent = new Intl.DateTimeFormat([], {
  hour: "numeric",
  minute: "2-digit"
}).format(new Date());