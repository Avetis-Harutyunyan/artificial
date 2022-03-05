"use strict";

function navSide() {
    const bars = document.getElementById("burger");
    const nav = document.getElementById("navSide");
    const bodyLeft = document.querySelector("body");

    bars.addEventListener("click", function () {
        nav.classList.toggle("active");

        // burger animation
        bars.classList.toggle("close");

        // body to left
        bodyLeft.classList.toggle("left");
    });
}
navSide();