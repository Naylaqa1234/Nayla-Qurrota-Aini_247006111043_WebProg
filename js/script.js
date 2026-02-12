function showMessage() {
  alert("Terima kasih telah mengunjungi portofolio saya!");
}

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  hero.style.setProperty("--x", e.clientX - rect.left + "px");
  hero.style.setProperty("--y", e.clientY - rect.top + "px");
});

hero.addEventListener("mousemove", (e) => {
  const light = hero.querySelector("::before");
});

