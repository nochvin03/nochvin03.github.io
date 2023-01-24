function toggleMenu() {
   const menuToggle = document.body.querySelector(".toggle");
   const sidebar = document.body.querySelector(".sidebar");
   menuToggle.classList.toggle("active");
   sidebar.classList.toggle("active");
}

window.addEventListener("scroll", () => {
   const toTop = document.querySelector(".toTop");
   toTop.classList.toggle("active", window.scrollY > 0);
});
