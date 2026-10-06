const countLabel = document.getElementById("countLabel");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const timesBtn = document.getElementById("timesBtn");
const divBtn = document.getElementById("divBtn");
const expBtn = document.getElementById("expBtn")
const sqrtBtn = document.getElementById("sqrtBtn");
const commaBtn = document.getElementById("commaBtn");
const equalBtn = document.getElementById("equalBtn");
const pmBtn = document.getElementById("pmBtn");
const OneBtn = document.getElementById("1Btn");
const TwoBtn = document.getElementById("2Btn");
const ThreeBtn = document.getElementById("3Btn");
const FourBtn = document.getElementById("4Btn");
const FiveBtn = document.getElementById("5Btn");
const SixBtn = document.getElementById("6Btn");
const SevenBtn = document.getElementById("7Btn");
const EightBtn = document.getElementById("8Btn");
const NineBtn = document.getElementById("9Btn");
const ZeroBtn = document.getElementById("0Btn");
const ClearBtn = document.getElementById("clearBtn");

let entrada = "";
let count = 0;
let operator = null;
let num1 = null;
let num2 = null;
let resultadoExibido = false;   

function display(value) {
    countLabel.textContent = String(value).slice(0, 10);
}

function updateEntry() {
    if (operator === null) {
        num1 = Number(entrada);
    } else {
        num2 = Number(entrada);
    }

    display(entrada);
}

function clear() {
    count = 0;
    operator = null;
    num1 = null;
    num2 = null;
    resultadoExibido = false;
    entrada = "";
    display(count);
}

function numberClick(numClicked) {
    if (resultadoExibido) {
        clear();
    }

    entrada += String(numClicked);
    updateEntry();
}

function selectOperator(selectedOperator) {
    if (num1 === null) {
        countLabel.textContent = "Digite o primeiro número";
        return;
    }

    // Esta versão calcula uma operação de cada vez.
    if (num2 !== null) {
        countLabel.textContent = "Pressione = antes de continuar";
        return;
    }

    operator = selectedOperator;
    entrada = "";

    // Permite usar o resultado anterior como primeiro número.
    resultadoExibido = false;
}

function toggleSign() {
    if (resultadoExibido) {
        num1 = -num1;
        count = num1;
        display(num1);
        return;
    }

    if (entrada === "") {
        return;
    }

    if (entrada.startsWith("-")) {
        entrada = entrada.slice(1);
    } else {
        entrada = "-" + entrada;
    }

    updateEntry();
}

function operate() {
    if (operator === null) {
        countLabel.textContent = "Selecione um operador";
        return;
    }

    if (num1 === null) {
        countLabel.textContent = "Digite o primeiro número";
        return;
    }

    if (operator !== "sqrt" && num2 === null) {
        countLabel.textContent = "Digite o segundo número";
        return;
    }

    if (operator === "plus") {
        count = num1 + num2;

    } else if (operator === "minus") {
        count = num1 - num2;

    } else if (operator === "times") {
        count = num1 * num2;

    } else if (operator === "div") {
        if (num2 === 0) {
            countLabel.textContent = "Não é possível dividir por zero";
            num2 = null;
            return;
        }

        count = num1 / num2;

    } else if (operator === "exp") {
        count = num1 ** num2;

    } else if (operator === "sqrt") {
        if (num1 < 0) {
            countLabel.textContent = "Raiz negativa não é real";
            return;
        }

        count = Math.sqrt(num1);
    } // Fecha o bloco da raiz antes de atualizar o visor.

    // Este trecho agora é executado para todas as operações.
    display(count);

    num1 = count;
    num2 = null;
    operator = null;
    resultadoExibido = true;

    return count;
}

function comma() {
    if (resultadoExibido) {
        clear();
    }

    // Impede inserir dois pontos no mesmo número.
    if (entrada.includes(".")) {
        return;
    }

    // Se ainda não digitou nada, começa com "0.".
    if (entrada === "") {
        entrada = "0";
    }

    entrada += ".";
    updateEntry();
}

plusBtn.onclick = function() {
    selectOperator("plus");
};

minusBtn.onclick = function() {
    selectOperator("minus");
};

timesBtn.onclick = function() {
    selectOperator("times");
};

divBtn.onclick = function() {
    selectOperator("div");
};

expBtn.onclick = function() {
    selectOperator("exp");
};

sqrtBtn.onclick = function() {
    selectOperator("sqrt");
};

pmBtn.onclick = function() {
    toggleSign();
};

commaBtn.onclick = function() {
    comma();
};

equalBtn.onclick = function() {
    operate();
};

OneBtn.onclick = function(){
    numberClick(1);
}

TwoBtn.onclick = function(){
    numberClick(2);
}

ThreeBtn.onclick = function(){
    numberClick(3);
}

FourBtn.onclick = function(){
    numberClick(4);
}

FiveBtn.onclick = function(){
    numberClick(5);
}

SixBtn.onclick = function(){
    numberClick(6);
}

SevenBtn.onclick = function(){
    numberClick(7);
}

EightBtn.onclick = function(){
    numberClick(8);
}

NineBtn.onclick = function(){
    numberClick(9);
}

ZeroBtn.onclick = function(){
    numberClick(0);
}

ClearBtn.onclick = function() {
    clear();
}
