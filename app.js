const profile = document.querySelector(".avatar");
const closeDown = document.querySelector(".profile")
const popUp = document.querySelector(".social");
const shareBtn = document.querySelector(".share")
const mediaQuery = window.matchMedia('(max-width: 1440px)');

profile.addEventListener("click", () => {
    closeDown.style.display = "none";
    popUp.classList.add("social");
    popUp.style.display = "flex";
})

shareBtn.addEventListener("click", () => {
    closeDown.classList.add("profile");
    popUp.style.display= "none";
    closeDown.style.display ="flex";
} )

function mediaQueryChange(event){
    if(event.matches) {
    profile.addEventListener("click", () => {
    closeDown.style.display = "flex";
    popUp.classList.add("social");
    popUp.style.display = "flex";
})
    }
}