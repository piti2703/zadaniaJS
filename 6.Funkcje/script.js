// zad 1
function printString() {
    console.log("Udało się!");
}
printString();

// zad 2

function printParam(str) {
    console.log(str);
}

printParam("raz dwa trzy");

// zad 3

const exapleArray = ["raz", "dwa", "trzy"];

function returnArray(array) {
    return array;
}
console.log(returnArray(exapleArray));

// zad 4

function printStr(str) {
    let counter = 1;
    let timer = setInterval(() => {
        if( counter < 5)
        {
            console.log(str);
            counter++;
        }
        else 
        {
            clearInterval(timer);
            console.log("Koniec");
        }
        
    }, 3000);
}
printStr("Lorem impsum")
