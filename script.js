// alert("Hello world!");
// console.log("Hello world!");

//declaration
var firstName;
var age;

//initialize
var lastName = "Volkov";

//assignment
firstName = "Vasya";
firstName = "Petya";
console.log(firstName);

//math-1
var cats = 3, rats = 5;
var animals = cats + rats;
console.log(animals);
var result = animals / 2;
// console.log(result);

//math-2
var names = firstName + lastName;
console.log(names);

//math-3
result = (2 + 1) / 3 - 6 * 2;
// result = 5 - 1 - 10 * 3; //4-30
console.log(result);

//math 4
var a = 5;
var b = 6;
var squareArea = a * b;
// alert(squareArea)
console.log(squareArea)

//example 5
var PI = 3.141592;
var r = 5;
var circleArea = r * r * PI;
console.log(circleArea);





//js LOGIC

var example1 = 10 === 10; //equals
var example2 = 11 > 10; //more than
var example3 = 10 < 11; //less than
var example4 = 10 >= 10; //more than or equals
var example5 = 10 <= 10; //less than or equals
var example6 = 11 !== 10; //not equals

//numbers
var number1 = 2; //number
var number = 2.3; //number too

//string, text
var string1 = "Hello world";// текст
var string2 ="A"; //тоже является  текстом
var string3 = ""; //является пустой строкой
var string4 = "5" // строка которая является пяти


var a = 4
var b = 6 
var example7 = a < b; //true

var c = 10;
var d = 11;
if (c < d) { //true 
  alert("C is less than D");
  console.log("Hello world")
}

var e = 3.14;
if (e !== 3.14) { //false
  alert("Why you don't know number PI?");
}
else {
  alert("Good job!"); //true
}


var age = 10;
if (age < 18) {
  alert("You can't vote yet"); //false
}
else {
  alert("You can vote"); //true
}
//example2
var age = 10;
if (age >= 18) {
  alert("You can vote"); //true
}
else {
  alert("You can't  vote yet, you're too young"); //false
}

//example3

var lightSwitch = 1;
if ( lightSwitch ===1) {
  alert("Light is on 💡💡💡"); //true
}
else{
  alert("Light is off");
}