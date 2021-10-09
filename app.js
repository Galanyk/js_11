const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['+', '-', '*', '/'];
const keyBoardEl = document.querySelector('#numbers');
const operations = document.querySelector('#operators');
const inputEl = document.querySelector('#input');
const clearData = document.querySelector('#operator-clear');
const operatorEquals = document.querySelector('#operator-equals')

keyBoardEl.addEventListener('click', renderElements)
operations.addEventListener('click', renderElements);

clearData.addEventListener('click', clear)
operatorEquals.addEventListener('click', showResult)
let leftOper = 0;
let rightOper = 0;
let operant;

function Calculator() {
    let result;
    this.summ = function() {
        // result += +inputEl.value[i]
        // console.log(result += inputEl.value[i])
    };
    this.subtract = function() {

    };

    this.multiply = function() {

    };

    this.devide = function() {

    };
}

function renderElements(e) {
    leftOper = e.target
    if (+e.target.id) {
        for (i = 0; i < numbers.length; ++i) {
            if (+e.target.id === i) {
                inputEl.value += numbers[i];
            }
        }
    } else if (+inputEl.value[inputEl.value.length - 1]) {
        leftOper = +inputEl.value;
        console.log(leftOper, typeof(leftOper));
        for (i = 0; i < operators.length; ++i) {
            if (e.target.id === operators[i]) {
                inputEl.value += operators[i];
            }
        }
        console.log(inputEl.value);
    }
}

function clear() {
    inputEl.value = '';
}

function showResult() {

}
const calc1 = new Calculator();