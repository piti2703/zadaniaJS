// zad 1 

let i = 0;
const time = setInterval(function(){

i++;
console.log("Cześć po raz " + i);

if(i >= 15)
{
    clearInterval(time);
}
}, 3000);

// zad 2

var arr = [5, 8, 1, 2, 1, 33, 23, 18, 4];

const time1 = setInterval(function() {
  console.log(arr);
  clearInterval(time1);
  
}
,2000);

let i = 0;
const time2 = setInterval(function() {
    console.log(arr[i]);
     i++;
    if(i > arr.length - 1)
      {
          clearInterval(time2);
      }
}
,3000);