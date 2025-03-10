// redirecter
document.querySelectorAll(".scroll-link").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// faq item
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq_item").forEach((item) => {
    const title = item.querySelector(".faq_item_title");
    const desc = item.querySelector(".faq_item_descr");
    const openIcon = item.querySelector(".open_faq");
    const closeIcon = item.querySelector(".close_faq");

    title.addEventListener("click", () => {
      const isActive = item.classList.contains("active_faq_item");

      document.querySelectorAll(".faq_item").forEach((faq) => {
        faq.classList.remove("active_faq_item");
      });

      if (!isActive) {
        item.classList.add("active_faq_item");
      }
    });
  });
});

// mobile menu
function toggleMenu() {
  document
    .querySelector(".mobile_menu")
    .classList.toggle("visible_mobile_menu");
}

// toggle reqs
function toggleReqs() {
  document.querySelector(".requires_big").classList.toggle("vis_requires_big");
}
