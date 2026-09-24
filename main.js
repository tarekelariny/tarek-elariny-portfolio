const menuToggle=document.querySelector(".menu-toggle"),navLinks=document.querySelector(".nav-links");
menuToggle?.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{navLinks?.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
