featuresList = document.querySelector(".features");
featuresArrow = document.querySelector(".features-arrow");
companyList = document.querySelector(".company");
companiesArrow = document.querySelector(".company-arrow");
featuresDropdown = document.querySelector(".features-dropdown");
hamburger = document.querySelector(".hamburger");
nav = document.querySelector(".nav");
exit = document.querySelector(".exit");
body = document.getElementsByTagName("body")[0];

featuresList.addEventListener("mouseover", () => {
  featuresArrow.src = "images/icon-arrow-up.svg";
});

featuresList.addEventListener("mouseout", () => {
  featuresArrow.src = "images/icon-arrow-down.svg";
});

companyList.addEventListener("mouseover", () => {
  companiesArrow.src = "images/icon-arrow-up.svg";
});

companyList.addEventListener("mouseout", () => {
  companiesArrow.src = "images/icon-arrow-down.svg";
});

hamburger.addEventListener("click", () => {
  nav.classList.toggle("none");
});

exit.addEventListener("click", () => {
  nav.classList.toggle("none");
});
