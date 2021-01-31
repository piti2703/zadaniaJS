// zad 1
let number1 = 1;
let number2 = 2;

if(number1 > number2)
{
    console.log("Liczba 1 jest większa")
}
else
{
    console.log("Liczba 2 jest większa")
}

// zad 2
let a = 1;
let b = 2;
let c = 3;

if ( a >  b)
{
  
    if (a > c)
    {
        console.log("Liczba a jest największa");
    }
    else
    {
        console.log("Liczba c jest największa");
    }
}
else if (b > c)
{
    {
        console.log("Liczba b jest największa"); 
    }
}
 else {
        console.log("Liczba c jest największa"); 
    }


// zad 3

for (let i = 0; i < 10; i++)
{
    console.log("Lubię JavaScript");
}

// zad 4 

let result = 0;

for(let i=0; i<=10; i++)
  {
    result += i;
  }
console.log(result);

// zad 5

var  n = 5;

for (let  i = 0; i <= n; i++ )
{
    if(i % 2 == 0)
    {
        console.log(i + " - parzysta")
    }
    else
    {
        console.log(i + " - nieparzysta")   
    }
}

// zad 6

for(let x = 1; x <= 10; x++)
{
    for(let y = 1; y <= 10; y++)
    {
        console.log("x= " + x + ", y=" + y)
    }  
}

// zad 7

console.log(0);

for( i = 1; i < 100; i++)
{
    if(i % 15 == 0)
    {
    console.log("Fizzbuzz");    
    }
    else if(i % 3 == 0)
    {
    console.log("Fizz");    
    }
    else if(i % 5 == 0)
    {
    console.log("Buzz");    
    }
    else
    {
        console.log(i);
    }

}

// zad 8a

for (let i = 1; i <= 5; i++)
{
    let row = "";
    for (let j = 1; j <= i; j++)
    {
        row += "*";
    }
    console.log(row);
}

// zad 8b

let star = " *";

for(let x = 0; x < 5; x++)
{
    var result = "";

    for(let y = 0; y < 5 - x; y++)
    {
        result += " ";
    }
    for(let z = 0; z < x + 1; z++)
    {
        result += star;
    }
    console.log(result);
}