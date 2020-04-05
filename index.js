const feedButton = document.querySelector("#feed");
const gradientDivision = document.querySelector("#gradient-division");
const fedMessage = document.querySelector("#fed-message");

feedButton.addEventListener("click", function() {
    const offset = gradientDivision.offset;
    offset.baseVal += 0.1;

    if (offset.baseVal >= 1.0) {
        feedButton.hidden = true;
        fedMessage.hidden = false;
    }
})