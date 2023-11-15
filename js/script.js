document.addEventListener("DOMContentLoaded", () => {
  const mobile = document.querySelector("#mobile");
  const boxes = document.querySelectorAll("#overview .box");

  const parentArray = [
    document.querySelectorAll(".section-headline"),
    document.querySelectorAll("#manga-anime .card"),
  ];

  mobile.addEventListener("scroll", () => {
    boxes.forEach((box) => {
      if (box.getBoundingClientRect().top < 800) {
        box.classList.add("zoomIn");
      } else {
        box.classList.remove("zoomIn");
      }
    });
    parentArray.forEach((childArray) => {
      childArray.forEach((item) => {
        if (item.getBoundingClientRect().top < 600) {
          item.classList.add("slideIn");
        } else {
          item.classList.remove("slideIn");
        }
      });
    });
  });
});
