import {
    searchBarOpen,
    searchBarClose,
    menuOpen,
    menuClose
} from "./modules/navigation";

import { openTabs } from "./modules/tabs";
import { 
    sliderDisplay, 
    slideRight, 
    slideLeft 
} from "./modules/slider";

// Declaring variables
let searchButton = document.getElementById('searchButton');
let menuButton = document.getElementById('menuButton');
let closeButton = document.getElementById('closeButton');
let breakfastButton = document.getElementById('breakfastButton');
let lunchButton = document.getElementById('lunchButton');
let dinnerButton = document.getElementById('dinnerButton');
let slideLeftButton = document.getElementById('slideLeftButton');
let slideRightButton = document.getElementById('slideRightButton');

// Window on load
window.addEventListener('load', () => {
    sliderDisplay();
})

// Window on resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'inline-block';
        closeButton.style.display = 'none';
        document.getElementById('logoHeader').style.position = 'static';
    }
})

// Add event listeners for search bar
searchButton.addEventListener('click', () => {
    searchBarOpen();
})

document.addEventListener('click', (e) => {
    if (e.target.id === 'searchButton' || e.target.id === 'searchInput' || e.target.id === 'menuButton') {
        return;
    }

    if (e.target.id === 'navLinks' && window.innerWidth <= 1024) {
        return;
    }
    searchBarClose();
})

// Add event listeners for menu
menuButton.addEventListener('click', () => {
    menuOpen(closeButton);
})

closeButton.addEventListener('click', () => {
    menuClose(closeButton);
})

// Add event listeners for tabs
breakfastButton.addEventListener('click', () => {
    openTabs(event, 'breakfast');
})
lunchButton.addEventListener('click', () => {
    openTabs(event, 'lunch');
})
dinnerButton.addEventListener('click', () => {
    openTabs(event, 'dinner');
})

// Opening default tab
breakfastButton.click();

// Add event listeners for slider
slideRightButton.addEventListener('click', () => {
    slideRight();
})

slideLeftButton.addEventListener('click', () => {
    slideLeft();
})
 