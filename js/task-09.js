const widget = document.querySelector('.widget');
const colorSpan = widget.querySelector('.color');
const changeColorBtn = widget.querySelector('.change-color');
const body = document.body;

changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}
