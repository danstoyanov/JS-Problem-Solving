function extractText() {
    let elements = document.querySelectorAll('li');
    let result = document.getElementById('result');

    for (const el of elements) {
        result.textContent += el.innerText + '\n';
    }
}