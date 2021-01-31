// zad 1

function printPerson(){
    console.log(this);
}

function makeItOlder() {
    this.age += 1;
}

function Person(firstName, secondName, age, country, city){
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.print = printPerson;
    this.addYear = makeItOlder;
}

var person1 = new Person("Piotr", "Trzebuniak", 21, "Polska", "Kraków");
var person1 = new Person("Maciej", "Nowak", 22, "Polska", "Warszawa");


person1.addYear();
person2.addYear();
person1.addYear();
console.log(person1);
console.log(person2);

// zad 2

// zad 3

function Calculator(a, b){
    this.a = a;
    this.b = b;
  
    this.add = function (){
      return (this.a + this.b);
    }
    this.sub = function(){
      return (this.a - this.b);
    }
    this.mul = function(){
      return (this.a * this.b);
    }
    this.div = function(){
      if (!b === 0)
        return (this.a / this.b);
      else
        return "Nie wolno dzielić przez 0!"
    }
  }
  
  const firstNumbers = new Calculator(4,2);
  const secondNumbers = new Calculator (5,0);
  
  console.log(firstNumbers.add());
  console.log(firstNumbers.sub());
  console.log(secondNumbers.add());
  console.log(secondNumbers.div());

  // zad 4

  let stairs = {
    yourStair: 0,
    goUp: function() {
        this.yourStair++;
    },
    
    goDown: function() {
        if (this.yourStair <= 0) {
            this.yourStair = 0;
            console.log("You reached the lowest stair!");
            
            return;
        }
        this.yourStair--;
    },

    tellMeMyStair: function() {
        return `Your Stair: ${this.yourStair}`;
    }
};

console.log(stairs.tellMeMyStair());
stairs.goUp();
console.log(stairs.tellMeMyStair());
stairs.goDown();
stairs.goDown();