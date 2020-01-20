// Declaring variables
let search = document.getElementById('search');
let navLinks = document.getElementById('navLinks');
let logoHeader = document.getElementById('logoHeader');


// Function that opens search bar
let searchBarOpen = () => {
    search.style.display = 'block';
    navLinks.style.display = 'none';  
    searchButton.style.display = 'none';
   
    if (window.innerWidth <= 1024) {
        logoHeader.style.display = 'none';
    }
}

// Function that closes search bar
let searchBarClose = () => {
    search.style.display = 'none';
    navLinks.style.display = 'inline-block';  
    searchButton.style.display = 'inline-block';
   
    if (window.innerWidth <= 1024) {
        logoHeader.style.display = 'block';
        navLinks.style.display = 'none';
    }
}

// Function that opens menu
let menuOpen = (closeButton) => {
    navLinks.style.display = 'block';
    closeButton.style.display = 'inline-block';
    logoHeader.style.display = 'block';
    logoHeader.style.position = 'fixed';
}

// Function that closes menu
let menuClose = (closeButton) => {
    navLinks.style.display = 'none';
    closeButton.style.display = 'none';
    logoHeader.style.position = 'static';
}

export { searchBarOpen, searchBarClose, menuOpen, menuClose };