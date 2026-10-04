const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const dialog = document.getElementById("demoDialog");
const openButton = document.getElementById("demoButton");
const closeButtons = [
  document.getElementById("closeDialog"),
  document.getElementById("closeDialog2")
].filter(Boolean);

openButton?.addEventListener("click", () => {
  if (dialog?.showModal) dialog.showModal();
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => dialog?.close());
});

dialog?.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const inside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!inside) dialog.close();
});