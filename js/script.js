// Display
// alert('hello');//pop-up

// document.write("<h2>hello world</h2>");//testing purpose

console.log("hello"); //debugging

// variables
var y; //declaration
y = 30; //intialization / assigning a value to a variable

//ideal way
var x = 50; //declaration and initialize
// alert(x);
// document.write(x);
console.log(x);
document.getElementById("display").innerHTML = x;

// multiple variable declaration
var person = "alex",
  age = 20,
  designation = "developer";

// alert(person + "\n" + age + "\n" + designation);
console.log(designation);

var _first = "harry";

// var var = 45;//wrong

// Operators
// Arithmatic
var num = 10;
var numTwo = 20;
var add = num + numTwo; //addition
var sub = numTwo - num; //subtraction
var mul = num * numTwo; //multiply
var division = numTwo / num; //division (Quotient)
var mod = numTwo % num; //modulus (remainder)

console.log(num, numTwo, add, sub, mul, division, mod);

// increment & decrement
num++; //num = num + 1
numTwo--; //numTwo = numTwo - 1
console.log(num, numTwo);

// pre & post increment & decrement
var x = ++num;
// num = num + 1;
// x = num;
console.log(x); //12
console.log(num); //12

var y = numTwo++;
// y = numTwo;
// numTwo = numTwo + 1;
console.log(y); //19
console.log(numTwo); //20

var z = ++numTwo;
// numTwo = numTwo + 1;//21
// z = numTwo;//21
++z; //22
numTwo--; //20
console.log(z); //22
console.log(numTwo); //20


