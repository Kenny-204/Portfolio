const linkParent = document.querySelector(".nav-links");
const slider = document.querySelectorAll(".slider-content");
const pageNav = function () {
  linkParent.addEventListener("click", function (e) {
    const closest = e.target.closest(".nav-link");
    if (!closest) return;
    //   like this is to remove the active class from the a tags but because the a wa inside the li thats why i looped throught the children of the children
    [...linkParent.children].forEach((el) =>
      [...el.children].forEach((el) => el.classList.remove("active"))
    );
    slider.forEach((el) => (el.style.display = "none"));
    slider.forEach((el) => el.classList.remove("active"));
    // set the current link im clicking
    const currentLink = closest.dataset.link;
    // add active to both the clicked link
    closest.classList.add("active");
    // get the target content
    targetContent = document.querySelector(`.content-${currentLink}`);
    // make the target content visible
    targetContent.style.display = "block";
    // delay the active class so the animation works
    setTimeout(() => {
      targetContent?.classList.add("active");
    }, 100);
  });
};
pageNav();
const text = "Front-end Developer";
const speed = 150;
let index = 0;
const typingAreas = document.querySelectorAll(".typing");
const typingEffect = function () {
  if (index < text.length) {
    typingAreas.forEach((typingArea) => {
      typingArea.innerHTML += text[index]
    });
    index++
    setTimeout(typingEffect,speed)
  }
};
typingEffect();
