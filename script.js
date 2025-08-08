document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    current = index;
  }

  prevBtn.addEventListener("click", () => {
    let idx = (current - 1 + slides.length) % slides.length;
    showSlide(idx);
  });

  nextBtn.addEventListener("click", () => {
    let idx = (current + 1) % slides.length;
    showSlide(idx);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  // Optional: Auto-slide every 5 seconds
  // setInterval(() => {
  //   let idx = (current + 1) % slides.length;
  //   showSlide(idx);
  // }, 5000);

  showSlide(current);

  setInterval(() => {
    let idx = (current + 1) % slides.length;
    showSlide(idx);
  }, 5000);

  // FAQ accordion logic (smooth open/close, answer fully visible)
  const faqItems = document.querySelectorAll(".faq-list li");
  faqItems.forEach((item) => {
    const question = item.querySelector("h3");
    const answer = item.querySelector("p");
    question.addEventListener("click", () => {
      faqItems.forEach((li) => {
        if (li !== item) {
          li.classList.remove("active");
          const ans = li.querySelector("p");
          ans.style.maxHeight = null;
          ans.style.padding = "0 24px";
        }
      });
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        answer.style.maxHeight = null;
        answer.style.padding = "0 24px";
      } else {
        item.classList.add("active");
        answer.style.maxHeight = 70 + "px";
        answer.style.padding = "16px 24px 24px 24px";
      }
    });
  });
});
