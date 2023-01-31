window.addEventListener("load", function () {
  console.log("test");
});

function delegate(box, selector, eventName, handler) {
  box.addEventListener(eventName, function (e) {
    const elem = e.target.closest(selector);

    if (elem !== null && box.contains(elem)) {
      handler.call(elem, e);
    }
  });
}