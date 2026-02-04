document.addEventListener("DOMContentLoaded", () => {
  // Force reflow-safe fade-in
  requestAnimationFrame(() => {
    document.body.classList.add("fade-in");
  });
});
