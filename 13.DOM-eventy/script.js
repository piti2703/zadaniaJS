// Zadanie 1
// 1
document.getElementById('test-event').addEventListener('click', ev => console.log(ev));
// 2
// document.body.addEventListener('mousemove', ev => console.log(ev));
// 3
document.getElementById('test-event').addEventListener('mouseenter', ev => console.log(ev));
// 4
// window.addEventListener('keypress', ev => console.log(ev));
// 5
// window.addEventListener('scroll', ev => console.log(ev));
// 
document.getElementById('input-test').addEventListener('change', ev => console.log(ev));

// Zadanie 2
function ex2 () {
    const dataText = document.getElementById('ex2').dataset.text;
    document.getElementById('span-ex2').innerText = dataText;
}

// Zadanie 3
document.getElementById('ex3').addEventListener('mouseenter', ev => {
    ev.currentTarget.style.backgroundColor = 'blue';
})
document.getElementById('ex3').addEventListener('mouseleave', ev => {
    ev.currentTarget.style.backgroundColor = 'red';
})

// Zadanie 4
document.getElementById('input-test').addEventListener('keypress', ev => {
    if (ev.code.indexOf('Digit') !== -1) {
        document.getElementById('ex3-err').innerText = 'Nie możesz używać cyfr!';
    } else {
        document.getElementById('ex3-err').innerText = '';
    }
});

// Zadanie 5
// !! W pliku HTML nie istnieją żadne elementy o ID ex5*

// Zadanie 6
window.addEventListener('scroll', ev => {
    if (window.scrollY > 200) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'white';
    }
})


// Zadanie 7
function Calculator () {
    this.numberA = 0;
    this.numberB = 0;
    this.result = 0;

    this.operation = '';

    this.operationButtonPressed = false;
    this.resultButtonPressed = false;

    this.handleDigitPress = function (digit) {

        if (this.resultButtonPressed) {
            this.resultButtonPressed = false;
            this.operationButtonPressed = false;
            this.numberA = 0;
        }

        if (!this.operationButtonPressed) {
            this.numberA = parseInt((this.numberA + digit.toString()));
            document.querySelector('#calculator input').value = this.numberA;
        } else {
            this.numberB = parseInt((this.numberB + digit.toString()));
            document.querySelector('#calculator input').value = this.numberB;
        }

    }
    this.handleOperationPress = function (operation) {
        
        if (operation === 'result') {
            this[this.operation]();
            document.querySelector('#calculator input').value = this.result;
            this.resultButtonPressed = true;

            this.numberA = this.result;
            this.numberB = 0;
            this.result = 0;
        } else {
            this.operation = operation;
            this.operationButtonPressed = true;
            this.resultButtonPressed = false;
        }

    }

    // Operations:
    this.add = function () {

        this.result = this.numberA + this.numberB;
        
    }

    this.subtract = function () {

        this.result = this.numberA - this.numberB;

    }

    this.divide = function () {

        this.result = this.numberA / this.numberB;

    }

    this.multiply = function () {

        this.result = this.numberA * this.numberB;

    }
}

const calculator = new Calculator();

document.querySelectorAll('#calculator__digits button').forEach(el => {
    el.addEventListener('click', ev => {
        calculator.handleDigitPress(parseInt(ev.currentTarget.innerText));
    })
});
document.querySelectorAll('#calculator__operations button').forEach(el => {
    el.addEventListener('click', ev => {
        switch (ev.currentTarget.innerText) {
            case '+' :
                calculator.handleOperationPress('add');
                break;
            case '-' :
                calculator.handleOperationPress('subtract');
                break;
            case '*' :
                calculator.handleOperationPress('multiply');
                break;
            case '/' :
                calculator.handleOperationPress('divide');
                break;
            case '=' :
                calculator.handleOperationPress('result');
                break;
        }
    })
});