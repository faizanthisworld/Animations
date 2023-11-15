document.addEventListener("DOMContentLoaded", () => {
  const mobile = document.querySelector("#mobile");
  const sectionTitles = document.querySelectorAll(".section-headline");
  const boxes = document.querySelectorAll("#overview .box")
  const cards = document.querySelectorAll("#manga-anime .card")
  mobile.addEventListener("scroll", () => {
    sectionTitles.forEach((title) => {
      if (title.getBoundingClientRect().top < 600) {
        title.classList.add("slideIn");
      } else {
        title.classList.remove("slideIn");
      }
    });
    boxes.forEach(box => {
        if (box.getBoundingClientRect().top < 800) {
            box.classList.add("zoomIn");
          } else {
            box.classList.remove("zoomIn");
          }
    })
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < 500) {
            card.classList.add("slideIn")
        }else {
            card.classList.remove("slideIn")
        }
    })
  });
});
