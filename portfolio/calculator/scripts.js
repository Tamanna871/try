/* Place your JavaScript in this file */

function showValue(button) {
    var buttonText = button.innerText;
    var displayBox = document.getElementById('display-box');

    if (buttonText === '=') {
        calculateResult();
    } else if (buttonText === 'x') {
        clearLastInput();
    } else {
        displayBox.innerHTML += ' ' + buttonText;
    }
}

function clearLastInput() {
    var displayBox = document.getElementById('display-box');
    var currentText = displayBox.innerHTML.trim();
    var inputs = currentText.split(' ');
    inputs.pop();
    displayBox.innerHTML = inputs.join(' ');
}

function calculateResult() {
    var displayBox = document.getElementById('display-box');
    var currentText = displayBox.innerHTML.trim();
    var inputs = currentText.split(' ');

    if (inputs.length >= 3) {
        var operand1 = parseFloat(inputs[0]);
        var operator = inputs[1];
        var operand2 = parseFloat(inputs[2]);

        switch (operator) {
            case '+':
                displayBox.innerHTML += '<br>' + (operand1 + operand2);
                break;
            case '-':
                displayBox.innerHTML += '<br>' + (operand1 - operand2);
                break;
            case '*':
                displayBox.innerHTML += '<br>' + (operand1 * operand2);
                break;
            case '/':
                if (operand2 !== 0) {
                    displayBox.innerHTML += '<br>' + (operand1 / operand2);
                } else {
                    displayBox.innerHTML += '<br>Cannot divide by zero';
                }
                break;
            default:
                displayBox.innerHTML += '<br>Invalid operation';
        }

        // Add a reset button after the result
        displayBox.innerHTML += '<span class="reset-button" onclick="resetDisplay()">Reset</span>';
    }
}

function resetDisplay() {
    var displayBox = document.getElementById('display-box');
    displayBox.innerHTML = '';
}
