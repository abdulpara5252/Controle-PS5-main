const menuicon = document.querySelector(".menu-icon")
let menulist = document.querySelector("#menu-list")

console.log(menulist)

menuicon.addEventListener("click", eventbutton)

function eventbutton() {
    if (menulist.style.display === "none") {

        menulist.style.display = "block"

    } else {
        menulist.style.display = "none"
    }

}


// Trigger animation on page load
window.addEventListener('load', () => {
    const textElements = document.querySelectorAll('.column-1 h2, .column-1 h3, .column-1 p, .column-1 h4');
    
    textElements.forEach((element) => {
        element.classList.add('animate-text');
    });
});
