function nProcess(e){
    let display = screen.textContent;
    console.log(this.textContent);
    screen.textContent = `${display}${this.textContent}`
}

function aProcess(e) {
    console.log(this);
}

const screen = document.querySelector('#screen');
const equal = document.querySelector('#equal');
const numbers = document.querySelectorAll('.number');
const actions = document.querySelectorAll('.actions')
numbers.forEach(num => num.addEventListener('click', nProcess));
actions.forEach(action => action.addEventListener('click', aProcess));
