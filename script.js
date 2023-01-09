// // alert("Hello world!");
// // console.log("Hello world!");

// //declaration
// var firstName;
// var age;

// //initialize
// var lastName = "Volkov";

// //assignment
// firstName = "Vasya";
// firstName = "Petya";
// console.log(firstName);

// //math-1
// var cats = 3, rats = 5;
// var animals = cats + rats;
// console.log(animals);
// var result = animals / 2;
// // console.log(result);

// //math-2
// var names = firstName + lastName;
// console.log(names);

// //math-3
// result = (2 + 1) / 3 - 6 * 2;
// // result = 5 - 1 - 10 * 3; //4-30
// console.log(result);

// //math 4
// var a = 5;
// var b = 6;
// var squareArea = a * b;
// // alert(squareArea)
// console.log(squareArea)

// //example 5
// var PI = 3.141592;
// var r = 5;
// var circleArea = r * r * PI;
// console.log(circleArea);





// //js LOGIC

// var example1 = 10 === 10; //equals
// var example2 = 11 > 10; //more than
// var example3 = 10 < 11; //less than
// var example4 = 10 >= 10; //more than or equals
// var example5 = 10 <= 10; //less than or equals
// var example6 = 11 !== 10; //not equals

// //numbers
// var number1 = 2; //number
// var number = 2.3; //number too

// //string, text
// var string1 = "Hello world";// текст
// var string2 ="A"; //тоже является  текстом
// var string3 = ""; //является пустой строкой
// var string4 = "5" // строка которая является пяти

// //boolean
// var boolean1 = true; //1
// var boolean2 = false; //0

// var a = 4
// var b = 6 
// var example7 = a < b; //true

// var c = 10;
// var d = 11;
// if (c < d) { //true 
//   alert("C is less than D");
//   console.log("Hello world")
// }

// var e = 3.14;
// if (e !== 3.14) { //false
//   alert("Why you don't know number PI?");
// }
// else {
//   alert("Good job!"); //true
// }


// var age = 10;
// if (age < 18) {
//   alert("You can't vote yet"); //false
// }
// else {
//   alert("You can vote"); //true
// }
// //example2
// var age = 10;
// if (age >= 18) {
//   alert("You can vote"); //true
// }
// else {
//   alert("You can't  vote yet, you're too young"); //false
// }

// //example3

// var lightSwitch = true;
// if ( lightSwitch) {
//   alert("Light is on 💡💡💡"); //true
// }
// else{
//   alert("Light is off");
// }

// var git = 100;
// if(git > 60) {
//   alert("color 📗📗");
// }
// else {
//   alert("color 📘📘");
// }

// var year = 2005;
// var age = 2023 - year;
// if(age >= 18) {
//   alert("You can vote!!!!!1");
// }
// else{
//   alert("You can't vote!!!!!!!1");
// }

// if(confirm("Do you have a car?")) {
//   alert("This website isn't for you");
// }
// else{
//   alert("Welcome fellow pedestrian!");
// }

if(confirm("Do you have a car?")) {
  if(confirm("Is it red?")){
    alert("You have a red car.");
  }
  else{
    alert("You have a car that isn't red.");
  }
}
else{
  if(confirm("Are you planning to have a car?")){
    alert("You are planning to have a car.");
  }
  else{
    alert("You don't like cars.");
  }
}

var username = prompt("What's your name?");  //if не пишется
alert("Welcome " + username);