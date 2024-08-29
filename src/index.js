"use strict";

import "./styles.css";
import {loadHome} from "./home.js"
import {loadMenu} from "./menu.js"
import {loadAbout} from "./about.js"

const content = document.querySelector("#content");

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

home.addEventListener("click", () => {
    content.textContent = "";
    loadHome();
})

menu.addEventListener("click", () => {
    content.textContent = "";
    loadMenu();
})

about.addEventListener("click", () => {
    content.textContent = "";
    loadAbout();
})

loadHome();