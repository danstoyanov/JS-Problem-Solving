function toggle() {
    let button = document.querySelector("[class='button']");
    let text = document.querySelector("div[id='extra']");

    text.style.display = text.style.display == 'none' ? 'block' : 'none';
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';
}

