document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let expression = '';
    let waitingForOperand = false;

    const updateDisplay = (value) => {
        display.innerText = value;
    };

    const handleNumberClick = (number) => {
        if (waitingForOperand) {
            expression = '';
            waitingForOperand = false;
        }
        if (display.innerText === '0') {
            updateDisplay(number);
        } else {
            updateDisplay(display.innerText + number);
        }
        expression += number;
    };

    const handleOperatorClick = (operator) => {
        if (waitingForOperand) {
            expression = expression.slice(0, -1) + operator;
        } else {
            expression += operator;
         
        }
        updateDisplay(operator);
    };

    const handleEqualClick = () => {
        console.log(expression);
            const result = eval(expression);
            updateDisplay(result);
        waitingForOperand = true;
    };

    const handleClearClick = () => {
        expression = '';
        updateDisplay('0');
        waitingForOperand = false;
    };

    const handleDecimalClick = () => {
        if (!waitingForOperand && !expression.includes('.')){
            updateDisplay(display.innerText + '.');
            expression += '.';
        
        } else if (waitingForOperand){
            updateDisplay('0.');
            expression = '0.';
            waitingForOperand = false;
        }
    };

    

    document.getElementById('zero').addEventListener('click', () => handleNumberClick('0'));
    document.getElementById('one').addEventListener('click', () => handleNumberClick('1'));
    document.getElementById('two').addEventListener('click', () => handleNumberClick('2'));
    document.getElementById('three').addEventListener('click', () => handleNumberClick('3'));
    document.getElementById('four').addEventListener('click', () => handleNumberClick('4'));
    document.getElementById('five').addEventListener('click', () => handleNumberClick('5'));
    document.getElementById('six').addEventListener('click', () => handleNumberClick('6'));
    document.getElementById('seven').addEventListener('click', () => handleNumberClick('7'));
    document.getElementById('eight').addEventListener('click', () => handleNumberClick('8'));
    document.getElementById('nine').addEventListener('click', () => handleNumberClick('9'));

    document.getElementById('add').addEventListener('click', () => handleOperatorClick('+'));
    document.getElementById('subtract').addEventListener('click', () => handleOperatorClick('-'));
    document.getElementById('multiply').addEventListener('click', () => handleOperatorClick('*'));
    document.getElementById('divide').addEventListener('click', () => handleOperatorClick('/'));

    document.getElementById('equals').addEventListener('click', handleEqualClick);
    document.getElementById('clear').addEventListener('click', handleClearClick);
    document.getElementById('decimal').addEventListener('click', handleDecimalClick);

    document.getElementById('back').addEventListener('click', () => {
        if (expression.length > 0) {
            expression = expression.slice(0, -1);
            updateDisplay(expression || '0');
            waitingForOperand = false;
        }
    });
    
});
