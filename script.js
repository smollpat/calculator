function nProcess(e){
    let display = screen.textContent;
    screen.textContent = `${display}${this.textContent}`
}

function aProcess(e) {
    getResult();
    let display = screen.textContent;
    let elements = Array.from(display);
    let previous = elements.length - 1;
    if(elements[0] == undefined || elements[previous] == '-' ||
    elements[previous] == '+' || elements[previous] == '/' ||
    elements[previous] == 'x' ) { return; }
    screen.textContent = `${display}${this.textContent}`;

    
}

function writePoint(){
    function checker(seek){
        if(elements.includes(seek)){
            const spot = elements.findIndex((element) => element == seek);
            
    if(elements.slice(spot + 1).includes('.')){
        return;
    } else {
        screen.textContent = `${display}.`
    }
} else{
    screen.textContent = `${display}.`
}
}
    let display = screen.textContent;
    const elements = Array.from(display);
    const previous = elements.length - 1;
    if(elements[0] == undefined || elements[previous] == '-' ||
    elements[previous] == '+' || elements[previous] == '/' ||
    elements[previous] == 'x' || elements[previous] == '.') { return; }

    checker('+');
    checker('-');
    checker('/');
    checker('*');
    }

function erase(){
    screen.textContent = '';
}

function deleteLast(){
    let display = screen.textContent;
    display = Array.from(display);
    display.pop();
    display = display.join('');
    screen.textContent = `${display}`;
}

function getResult(){ 
    let display = screen.textContent;
    display = Array.from(display);
    if(display.includes('+')){
        let action = display.findIndex((element) => element == '+');
        let opperand1 = Number(display.slice(0, action).join(""));       
        let opperand2 = Number(display.slice(action + 1).join(""));
        screen.textContent = `${add(opperand1, opperand2)}`;
    }else if(display.includes('-')){
        let action = display.findIndex((element) => element == '-');
        let opperand1 = Number(display.slice(0, action).join(""));       
        let opperand2 = Number(display.slice(action + 1).join(""));
        screen.textContent = `${substract(opperand1, opperand2)}`;
    } else if(display.includes('/')){
        let action = display.findIndex((element) => element == '/');
        let opperand1 = Number(display.slice(0, action).join(""));       
        let opperand2 = Number(display.slice(action + 1).join(""));
        if(opperand2 == 0){
            alert('cant divide by 0');
            screen.textContent = '';
        } else{
        screen.textContent = `${divide(opperand1, opperand2)}`;
        }
    } else if(display.includes('x')){
        let action = display.findIndex((element) => element == 'x');
        let opperand1 = Number(display.slice(0, action).join(""));       
        let opperand2 = Number(display.slice(action + 1).join(""));
        screen.textContent = `${multiply(opperand1, opperand2)}`;
    }
}
function add(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function divide(a,b){
    return a / b;
}
function multiply(a,b){
    return a * b;
}

const screen = document.querySelector('#screen');
const equal = document.querySelector('#equal');
const numbers = document.querySelectorAll('.number');
const point = document.querySelector('#point');
const actions = document.querySelectorAll('.action');
const clear = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
point.addEventListener('click', writePoint);
deleteBtn.addEventListener('click', deleteLast);
clear.addEventListener('click', erase);
equal.addEventListener('click', getResult);
numbers.forEach(num => num.addEventListener('click', nProcess));
actions.forEach(action => action.addEventListener('click', aProcess));



