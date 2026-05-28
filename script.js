const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("alt-vibe");
    const pressed = document.body.classList.contains("alt-vibe");
    toggle.setAttribute("aria-pressed", String(pressed));
  });
}
