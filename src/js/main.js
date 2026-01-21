"use strict";

document.querySelector("#hamburgerMenu").addEventListener("click", toggleMenu);

function toggleMenu() {
    var x = document.querySelector(".mainNav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}