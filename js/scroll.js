"use strict";

window.addEventListener("scroll", function () {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("topNav", scrollY > 90);
});
