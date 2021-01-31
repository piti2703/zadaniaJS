// zad 1
const arr = ["raz", "dwa", "trzy"];
console.log(arr);

// zad 2

const arr = ["raz", "2", "trzy", "4", "pięć", "sześć"];

console.log(arr[0] + " " + arr[1]);
console.log(arr[arr.length - 1]);
console.log(arr);
console.log(arr.filter((x, i) => i % 2));

console.log(arr.filter((x, i) => {
    return typeof(x) == "string"
}));
console.log(arr.filter((x, i) => {
    return typeof(x) == "number"
}));

// zad 3 

let arr = [1, 2, 3, 4, 5, 6];
let counter1 = 0;

// *
arr.forEach((elem, i)=> {
    counter1 += elem;
})
console.log(counter1);
// **
let counter2 = 0;
arr.forEach((elem, i)=> {
    counter2 -= elem;
})
console.log(counter2);
// ***
let counter3 = 0;
arr.forEach((elem, i)=> {
    counter3 += elem;
})
console.log(counter3 / arr.length);

// ****
arr.forEach((elem, i ) => {
    if (elem % 2 == 0)
    {
        console.log(elem);
    }
})
// *****
arr.forEach((elem, i ) => {
    if (elem % 2 != 0)
    {
        console.log(elem);
    }
})
// ******
var max = 0;
for(let i = 0; i < arr.length; i++)
{
    if (max <= arr[i])
    {
        max = arr[i];
    }
}
console.log("Maximum to: " + max);

// *******

var min = arr[0];
for(let i = 0; i < arr.length; i++)
{
    if (min > arr[i])
    {
        min = arr[i];
    }
}
console.log("Minimum to: " + min);

// ********
console.log(arr.reverse())

// zad 4

let tab = [1, 2, 3, 4];

let sum = 0;

function tabSumFunction(tab)
{
    for(let i = 0; i < tab.length; i++)
    {
        sum = sum + tab[i]
    }
    console.log(sum);
}
tabSumFunction(tab);

// zad 5

let arr = [1, 2, 3, 4];
let sum = 0;
function arrSumFunction(arr) 
{
  for(let i = 0; i < arr.length; i++)
    {
      sum += arr[i];
    }
    let avarage = sum / arr.length; 
  for(let j = 0; j < arr.length; j++)
    {
      console.log(avarage * arr[j])
    }
}
arrSumFunction(arr);

// zad 6

const func = (arr) =>{
    let sum = 0;
    let counter = 0;
    arr.forEach((elem, i) => {
        if(elem % 2 == 0) {
            sum += elem;
            counter++;
        }
    })
    console.log(sum)
    let average = sum / counter
    console.log(average)
}
func([2, 4, 6, 5 ])

// zad 7

const func = (arr) =>{
    console.log(arr.sort((a, b) => {
        return a - b;
    }))
}

func([2, 4, 6, 5, 22, 42]);

// zad 8 

const arr1 = [1, 5, 8, 44, 56, 39];
const arr2 = [9, 0, 21, 78, 8, 4];
const newArr = [];

function addIndexes(arr1, arr2)
{
    arr1.forEach((num1, i) => {
        newArr.push(num1 + arr2[i]);
    });
    return newArr; 
}

console.log(addIndexes(arr1, arr2));

// zad 9 nie trzeba robić

// zad 10

function invert(arr){
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = - arr[i];
    }
    return arr;
}
console.log(invert([-2, -1, 0, 1, 2]));