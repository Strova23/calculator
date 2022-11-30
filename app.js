function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return (a*b).toFixed(2);
}

function divide(a, b) {
    if (a/b == "Infinity") return alert("You can't divide by zero");
    return (a/b).toFixed(2);
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
    }
}

console.log(operate(1,2, "+"))