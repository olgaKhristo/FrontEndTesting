const btn = document.querySelector('button');
const changeTitle = () => {
    const h1 = document.querySelector('h1');
    h1.textContent = 'Good morning!';
}
btn.addEventListener('click', changeTitle);

const darkMode = document.querySelector('#dark-mode');
const changeMode = () => {
    document.querySelector('body').classList.add('dark-mode');
    
}
darkMode.addEventListener('click', changeMode);

const form = document.querySelector('form');    
const updateTitle = (e) => {
    e.preventDefault();
    const h1 = document.querySelector('h1');
    const input = document.querySelector('#name');
    h1.textContent = `Hello, ${input.value}`;
    input.value = '';
    
}

form.addEventListener('submit', updateTitle);