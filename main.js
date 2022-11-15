window.addEventListener("DOMContentLoaded", main);

let timeoutRef;

function main() {
    // start på programmet

    timeoutRef = setTimeout(changeBackgroundColor, 4000);
    addEventListeners();
}

function changeBackgroundColor() {
    document.body.style.background = "lightblue";
}

function addEventListeners() {
    const button = document.getElementById("cancel");
    button.addEventListener("click", cancelBackgroundChange);
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);
}