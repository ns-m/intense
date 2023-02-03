window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const btnUp = document.querySelector(".btnUp");

  delegate(menu, "a", "click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.hash);

    scrollToElem(target);

    setActiveMenuItem(menu, this);
  });

  const hash = window.location.hash;
  let autoTarget = hash.length > 0 ? document.querySelector(hash) : null;

  if (autoTarget !== null) {
    scrollToElem(autoTarget);

    setActiveMenuItem(menu, menu.querySelector(`[href$ = "${hash}"]`));
  }

  btnUp.addEventListener("click", function (e) {
    scrollToUp(e);
  });

  document.addEventListener("scroll", function () {
    const btnUpCL = btnUp.classList;
    let threshold = window.innerHeight / 2;
    window.scrollY > threshold
      ? btnUpCL.add("btnUp-open")
      : btnUpCL.remove("btnUp-open");
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

function scrollToElem(elem) {
  let getRect = elem.getBoundingClientRect(),
    bodyRect = document.body.getBoundingClientRect(),
    top = getRect.top - bodyRect.top;
  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

function scrollToUp(elem) {
  let top = document.body.getBoundingClientRect();

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
