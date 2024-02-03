let counterValue = 0; 
let value = document.getElementById("value");
value.innerText = counterValue;

let incBtn = document.querySelector('[data-action="increment"]');
let decBtn = document.querySelector('[data-action="decrement"]');

incBtn.addEventListener('click', () => {
    counterValue += 1;
    value.innerText = counterValue;
});

decBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.innerText = counterValue;
});
