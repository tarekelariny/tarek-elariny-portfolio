import "./style.css";
const menuToggle=document.querySelector(".menu-toggle"),navLinks=document.querySelector(".nav-links");
menuToggle?.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{navLinks?.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
// Bun Rush Gallery Toggle
const galleryToggle = document.querySelector(".gallery-toggle");
const hiddenGallery = document.getElementById("bun-gallery-more");

galleryToggle?.addEventListener("click", () => {
  const open = hiddenGallery.classList.toggle("open");

  galleryToggle.setAttribute("aria-expanded", String(open));
  galleryToggle.textContent = open
    ? "Hide Gallery"
    : "View Gallery (4)";
});
