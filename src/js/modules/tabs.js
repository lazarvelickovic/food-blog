// Function for showing tabs
let openTabs = (event, tabId) => {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-content-flex");

    for (let el of tabcontent) {
        el.style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link-buttons");

    for (let el of tablinks) {
        el.className = el.className.replace(" active-tab-link", "");
    }

    document.getElementById(tabId).style.display = "flex";
    event.currentTarget.className += " active-tab-link";
  }
  
  export { openTabs };