function smoothTransition() {
  document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
  var element = document.querySelector(`a[href^="#contact"]`);
  console.log(element);
  element.scrollIntoView({ block: "end", behavior: "smooth" });
  console.log("hola hola ");
}
