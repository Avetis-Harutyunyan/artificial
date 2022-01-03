window.addEventListener("scroll", function() {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("topNav", scrollY > 90);

    // scroll to top
    const toTop = document.querySelector(".to_top");
    toTop.classList.toggle("active", scrollY > 250);
});