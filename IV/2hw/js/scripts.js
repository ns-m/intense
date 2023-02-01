window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");

  delegate(menu, "a", "click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.hash);
    let top = target.offsetTop - 70;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActiveMenuItem(menu, this);
  });
});

function delegate(box, selector, eventName, handler) {
  box.addEventListener(eventName, function (e) {
    const elem = e.target.closest(selector);

    if (elem !== null && box.contains(elem)) {
      handler.call(elem, e);
    }
  });
}

function setActiveMenuItem(menu, item) {
  menu
    .querySelectorAll("a")
    .forEach((link) => link.classList.remove("menu__link-active"));
  item.classList.add("menu__link-active");
}
