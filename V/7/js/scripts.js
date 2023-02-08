window.addEventListener("load", function () {
  const faq = document.querySelector(".faq");

  delegate(faq, ".ask", "click", function () {
    const answer = this.closest(".item").querySelector(".answer");

    animToggleElem(
      answer,
      [
        { opacity: 0, transform: "scale(0.5)" },
        { opacity: 1, transform: "scale(1)" },
      ],
      500
    );
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

function animToggleElem(elem, keyframes, duration) {
  const cl = elem.classList;

  if (cl.contains("open")) {
    let animation = elem.animate(keyframes, { duration, direction: "reverse" });

    animation.addEventListener("finish", function () {
      cl.remove("open");
    });
  } else {
    cl.add("open");
    elem.animate(elem.animate(keyframes, { duration }));
  }
}
