/*----- app's state (variables) -----*/
let total = 0; 


/*----- cached element references -----*/
const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');
const numEl = document.getElementById('num');
const inputEl = document.getElementById('num-input');

/*----- event listeners -----*/
plusEl.addEventListener('click', addNum); 
minusEl.addEventListener('click', subNum); 


/*----- functions -----*/
function addNum(){ 
    // let newSum = 0; 
    // if (inputEl.value = '') 
    // return; 
    // else { 
    let newSum = parseInt(inputEl.value); 
    total += newSum; 
    render(); 
}; 

function subNum(){ 
    let newSum = parseInt(inputEl.value);
    total -= newSum;
    render();

};

function render(){
    numEl.textContent = `${total}`; 
}  

function init(){ 
    numEl.innerText = '0'; 
    total = 0; 
}; 

init(); 