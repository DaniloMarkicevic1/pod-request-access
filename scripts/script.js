let btn = document.querySelector('.btn');
let error = document.querySelector('.error');
let inputValue = document.querySelector('.input');

let regex = /@/;

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!regex.test(inputValue.value)) {
        error.style.display = 'block';
    } else {
        inputValue.value = '';
        error.style.display = 'none';
    }
});
