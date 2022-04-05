const shareButton = document.querySelector(".article__share");
const sharePopup = document.querySelector(".article__popup");

shareButton.addEventListener("click", function () {
    sharePopup.classList.toggle("hidden");
    shareButton.classList.toggle("active");
    // shareButton.style.background = "var(--grayish-dark-blue)";
});
