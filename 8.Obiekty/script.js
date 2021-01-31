// zad 1

const car = {
    type: "Sedan",
    brand: "VW",
    model: "Passat",
    year: 1999,
    color: "gray",
}
console.log(car.type, car.brand, car.model, car.year, car.color);

// zad 2

const car = {
    type: "Sedan",
    brand: "VW",
    model: "Passat",
    year: 1999,
    color: "gray",
    changeName: function(a){
        this.brand = a;
    }
}
console.log(car.type, car.brand, car.model, car.year, car.color);
car.changeName("New")
console.log(car.brand)

// zad 3

const numbers = [1, 2, 3, 4, 5];
const numberObj = {
    sum: 0,
    sumNumbers(numbers){
        for (let i = 0; i < numbers.length; i++) 
        {
            this.sum += numbers[i];
        }
        console.log(this.sum);
    }
}
numberObj.sumNumbers(numbers);

// zad 4

const car = {
    name: "BMW",
    age: 12,
    id: "23132",
};
for (let property in car) console.log(`${property}: ${car[property]}`);

// zad 5

let car = {
    someObj: {
        myProp: 1
    }
};

console.log(car.someObj.myProp);


// zad 6

let car = {
    someObj: {
        myProp: 1
    }
};

function sayHello() {
    console.log("Hello");
}
console.log(car.someObj.myProp);

car.variant = "hatchback";
car.greetDriver = sayHello;
car.greetDriver();
