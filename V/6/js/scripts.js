window.addEventListener("load", function () {
  const faq = document.querySelector(".faq");

  delegate(faq, ".ask", "click", function () {
    const answer = this.closest(".item").querySelector(".answer");
    const cl = answer.classList;

    if (cl.contains("open")) {
      let animation = answer.animate(
        [
          { opacity: 1, transform: "translateX(0)" },
          { opacity: 0, transform: "translateX(100px)" },
        ],
        {
          dutation: 500,
        }
      );

      animation.addEventListener("finish", function () {
        cl.remove("open");
      });
    } else {
      cl.add("open");
      answer.animate(
        [
          { opacity: 0, transform: "translateX(-100px)" },
          { opacity: 1, transform: "translateX(0)" },
        ],
        { dutation: 500 }
      );
    }
  });
});

function delegate(box, selector, eventName, handler) {
  box.addEventListener(eventName, function (e) {
    let elem = e.target.closest(selector);

    if (elem !== null && box.contains(elem)) {
      handler.call(elem, e);
    }
  });
}
