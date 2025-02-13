let yesButton = document.getElementById("yes");
const hidden = document.querySelector(".hidden");

yesButton.addEventListener("click", () => {
    // console.log("open");
    hidden.style.display= "block";
    hidden.scrollIntoView({ behavior: 'smooth' });
})