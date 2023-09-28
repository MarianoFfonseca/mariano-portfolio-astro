export default function OnViewTransition(elements) {
  window.onload = () => {
    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateX(-100px)";
    });
  };
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const height = window.innerHeight;

    elements.forEach((element) => {
      const offset = element.offsetTop;
      const offsetHeight = element.offsetHeight - 200;
      if (scroll > offset - height + offsetHeight) {
        element.style.transition = "all 1.5s ease-in-out";
        element.style.opacity = "1";
        element.style.transform = "translateX(0px)";
      }
    });
  });
}
