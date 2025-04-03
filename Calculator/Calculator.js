let display = document.getElementById("display");

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateFunction(func) {
    try {
        let value = parseFloat(display.value);

        if (func === "sqrt") display.value = Math.sqrt(value);
        else if (func === "cbrt") display.value = Math.cbrt(value);
        else if (func === "square") display.value = Math.pow(value, 2);
        else if (func === "cube") display.value = Math.pow(value, 3);
        else if (func === "sin") display.value = Math.sin(value * Math.PI / 180).toFixed(4);
        else if (func === "cos") display.value = Math.cos(value * Math.PI / 180).toFixed(4);
        else if (func === "tan") display.value = Math.tan(value * Math.PI / 180).toFixed(4);
        else if (func === "log") display.value = Math.log10(value).toFixed(4);
        else if (func === "ln") display.value = Math.log(value).toFixed(4);
        else if (func === "exp") display.value = Math.exp(value).toFixed(4);
        else if (func === "factorial") display.value = factorial(value);

    } catch (error) {
        display.value = "Error";
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    if (n < 0) return "NaN";
    return n * factorial(n - 1);
}
