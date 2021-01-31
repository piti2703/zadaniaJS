// zad 1

function Person(name, surname, age, country, city, language)
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.changeAge = function(age){
        this.age = age;
    }
    this.changeCity = function(city){
        this.city = city;
    }
}

const p1 = new Person("Piotrek", "Trzebniak", 21, "Poland", "Cracow", "Polish");
const p1 = new Person("Maciej", "Kowalski", 31, "Poland", "Warsaw", "Polish");
const p1 = new Person("Roman", "Nowak", 25, "UK", "London", "English");
const p1 = new Person("Zdzisław", "Szyc", 11, "France", "Paris", "French");
const p1 = new Person("Robert", "Sario", 61, "Spain", "Porto", "Portuguese");

console.log(p1);

// zad 2

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b) {
    if(b == 0)
    {
        console.log("Cannot divide by zero!");
        return;
    }
    return a / b;
}
function Calculator(){
    this.memory = [];
    this.showMemory = () => console.log(this.memory);
    this.restMemory = () => this.memory = [];
    this.calculate = (a, b, operation) => {
        this.memory.push(operation(a, b));
        return operation(a, b);
    }
}
let calc = new Calculator();
let kalk = new Calculator();

console.log(calc.calculate(5, 10, add));
console.log(calc.calculate(5, 23, divide));
console.log(calc.memory);

console.log(kalk.calculate(5.3, 10, multiply));
console.log(kalk.calculate(15, 23, subtract));
console.log(kalk.memory);

calc.showMemory();
kalk.restMemory();
console.log(kalk.showMemory());

