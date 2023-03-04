function showText() {
    let url = document.getElementById('more');
    let text = document.getElementById('text');

    if (text.style.display == 'none') {
        text.style.display = 'inline';
        url.style.display = 'none';
    } else {
        text.style.display = 'none';
        url.style.display = 'inline';
    }
}