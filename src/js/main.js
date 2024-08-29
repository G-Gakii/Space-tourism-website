const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const links = document.getElementById("links");

const displayNav = () => {
  hamburger.addEventListener("click", () => {
    links.style.display = "flex";
    links.style.flexDirection = "column";

    links.style.minHeight = "100vh";
    links.style.paddingRight = "4rem";
    links.style.width = "100%";
    // closeIcon.style.display = "block";
    hamburger.style.display = "none";
  });
  closeIcon.addEventListener("click", () => {
    links.style.display = "none";
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
    links.style.height = "";
  });
};

displayNav();
