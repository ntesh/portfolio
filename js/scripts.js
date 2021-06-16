window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

let tabOne = document.getElementById("tabOne");
let tabOneHover = document.getElementById("tabOneHover");
let tabOneContent = document.getElementById("tabOneContent");
let tabTwo = document.getElementById("tabTwo");
let tabTwoHover = document.getElementById("tabTwoHover");
let tabTwoContent = document.getElementById("tabTwoContent");
let tabThree = document.getElementById("tabThree");
let tabThreeHover = document.getElementById("tabThreeHover");
let tabThreeContent = document.getElementById("tabThreeContent");

// tabOne.addEventListener("click", function () {
//   tabOneHover.style.display = "block";
//   tabOne.style.display = "none";
//   tabTwo.style.display = "block";
//   tabThree.style.display = "block";
//   tabTwoHover.style.display = "none";
//   tabThreeHover.style.display = "none";
// });

// tabTwo.addEventListener("click", function () {
//   tabTwoHover.style.display = "block";
//   tabTwo.style.display = "none";
//   tabOne.style.display = "block";
//   tabThree.style.display = "block";
//   tabOneHover.style.display = "none";
//   tabThreeHover.style.display = "none";
// });

// tabThree.addEventListener("click", function () {
//   tabThreeHover.style.display = "block";
//   tabThree.style.display = "none";
//   tabOne.style.display = "block";
//   tabTwo.style.display = "block";
//   tabOneHover.style.display = "none";
//   tabTwoHover.style.display = "none";
// });

tabOne.addEventListener("mouseover", function () {
  tabOneHover.style.display = "block";
  tabTwo.style.display = "block";
  tabThree.style.display = "block";
  tabOneContent.style.display = "block";
  tabOne.style.display = "none";
  tabTwoHover.style.display = "none";
  tabThreeHover.style.display = "none";
  tabTwoContent.style.display = "none";
  tabThreeContent.style.display = "none";
});

tabTwo.addEventListener("mouseover", function () {
  tabTwoHover.style.display = "block";
  tabOne.style.display = "block";
  tabThree.style.display = "block";
  tabTwoContent.style.display = "block";
  tabTwo.style.display = "none";
  tabOneHover.style.display = "none";
  tabThreeHover.style.display = "none";
  tabOneContent.style.display = "none";
  tabThreeContent.style.display = "none";
});

tabThree.addEventListener("mouseover", function () {
  tabThreeHover.style.display = "block";
  tabOne.style.display = "block";
  tabTwo.style.display = "block";
  tabThreeContent.style.display = "block";
  tabThree.style.display = "none";
  tabOneHover.style.display = "none";
  tabTwoHover.style.display = "none";
  tabOneContent.style.display = "none";
  tabTwoContent.style.display = "none";
});
