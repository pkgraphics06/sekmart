'use strict';

/** add on event **/

const addEventOnElen = function (elen, type, callback) {
  if (elen.length > 1) {
    for (let i = 0; i < elen.length; i++) {
      elen[i].addEventListener(type, callback);
    }
  } else {
    elen.addEventListener(type, callback);
  }
} 


/** toggle navbar **/

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function() {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active")
}

addEventOnElen(navToggler, "click", toggleNavbar);

const closeNavbar = function() {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElen(navbarLinks, "click", closeNavbar);



/** header active **/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventlistener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});





