const btn = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

btn.addEventListener("click", () => overlay.classList.add("active"));

overlay.addEventListener("click", cancel);
close.addEventListener("click", cancel);

function cancel() {
  overlay.classList.remove("active");
}
