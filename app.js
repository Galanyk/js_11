function Calculator() {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operators = ['+', '-', '*', '/'];
    const keyBoardEl = document.querySelector('#numbers');
    const operationsEl = document.querySelector('#operators');
    const inputEl = document.querySelector('#input');
    const clearDataEl = document.querySelector('#operator-clear');
    const operatorEqualsEl = document.querySelector('#operator-equals')

    RESULT = {
        leftOper: null,
        rightOper: null,
        separateOperation: null,
        result: null,
        isTab: true,
    }


    this.calculatorFunction = function() {
        keyBoardEl.addEventListener('click', renderElements)
        operationsEl.addEventListener('click', renderElements);

        clearDataEl.addEventListener('click', clear)
        operatorEqualsEl.addEventListener('click', calculation)

        this.summ = function(lvalue, rvalue) {
            return lvalue + rvalue;
        }

        this.subtract = function(lvalue, rvalue) {
            return lvalue - rvalue;
        };

        this.multiply = function(lvalue, rvalue) {
            return lvalue * rvalue;
        };

        this.devide = function(lvalue, rvalue) {
            if (rvalue > 0) {
                return lvalue / rvalue;
            } else {
                alert("Wrong operation")
                return NaN;
            }
        };

        this.showResult = function(result) {
            inputEl.value += "=" + result;
        }


        function renderElements(e) {
            // console.log(e.target.id[e.target.id.length - 1])
            // console.log(RESULT.isTab);
            if (RESULT.isTab) {
                if (e.target.id[e.target.id.length - 1] >= '0' &&
                    e.target.id[e.target.id.length - 1] <= '9') {
                    for (i = 0; i < numbers.length; ++i) {
                        if (+e.target.id[e.target.id.length - 1] === i) {
                            inputEl.value += numbers[i];
                        }
                    }
                } else if (inputEl.value.length > 0 &&
                    +inputEl.value[inputEl.value.length - 1] ||
                    inputEl.value[inputEl.value.length - 1] === '0') {
                    separateOperation = e.target.id[e.target.id.length - 1];
                    for (i = 0; i < operators.length; ++i) {
                        if (e.target.id[e.target.id.length - 1] === operators[i]) {
                            inputEl.value += operators[i];
                        }
                    }
                }
            }
        }


        function clear() {
            inputEl.value = '';
            RESULT.isTab = true;
        }

        function calculation() {
            if (!inputEl.value.includes("=")) {
                // console.log(inputEl.value.includes("="))
                const tempArray = inputEl.value.split(separateOperation);
                if (tempArray.length > 1 &&
                    tempArray[tempArray.length - 1] !== "") {
                    leftOper = +tempArray[0];
                    rightOper = +tempArray[1];
                    RESULT.isTab = false;
                    if (separateOperation === "+") {
                        result = calc1.summ(leftOper, rightOper)
                    } else if (separateOperation === "-") {
                        result = calc1.subtract(leftOper, rightOper)
                    } else if (separateOperation === "*") {
                        result = calc1.multiply(leftOper, rightOper)
                    } else if (separateOperation === "/") {
                        result = calc1.devide(leftOper, rightOper)
                    }
                    calc1.showResult(result);
                }
            }
        }
    }
}
const calc1 = new Calculator();
calc1.calculatorFunction();