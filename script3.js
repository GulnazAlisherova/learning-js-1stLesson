/*
new type of comment 

VARIABLES
*/
var emptyVariable;
var message = "Hello world"; //most usable
var firstName, lastName = "Ulanov";


// function deleteNumber(a, b){
//   console.log(a / b);
// }
// deleteNumber(1, 0);


//numbers -> data type
//JS - математические операции не ведут к ошибке  example NAN or INfinity
var exampleNumber1 = 123;
var exampleNumber2 = 123.45;
// var exampleNumber3 = Infinity; // 1 / 0 -infinity
// var exampleNumber4 = Nan; // not a number 

// document.write(typeof "nature");

// document.write(typeof exampleNumber1);
// document.write(typeof "asda" / 2  );

//string

var exampleString = 'hello world!'; //-> string too no matter
var exampleString1 = "hello world!"; //-> string
// var exampleString2 = helloWorld; // переменная
var exampleString3 = `hello world!`; //-> string too
var exampleString4 = "4"; // -> string

//Boolean
var booleanExample1 = true;
var booleanExample2 = false;

//Special types
var exampleNull = null; //this variable is empty
var exampleUndef = undefined; // this variable wasn't given не задали выходит когда не задали значение для переменной

//big int -> number
var exampleBigInt = 1566516548646513318n; // n  must be

//Symbol
var exampleSymbol = Symbol("id");

//Objects
var exampleObject1 = {};
// var exampleObject2 = Math;
// document.write(typeof exampleObject1); 

//weird stuff
// document.write(typeof null);


//output
// alert('Hello world');
// var result = prompt('Hello world'); // ask from a username smth string
// var result2 = confirm(); //boolean
// document.write("Hello world"); // вывод чего то в HTML

//конвертация типов данных
// var exampleTypeConversion1 = 5 + 5 + "5"; //105

// var exampleTypeConversion2 ="5"+ 5 + 5 ; //555

// var exampleTypeConversion3 = true + 5; //true = 1

// var exampleTypeConversion4 = false + 5; //false = 0

// var exampleTypeConversion5 = new String(5);

// var exampleTypeConversion6 = new Number("10");

// var exampleTypeConversion7 = new Boolean (" "); //true

// document.write (exampleTypeConversion3);
// document.write (exampleTypeConversion5);
// document.write (exampleTypeConversion6);
// document.write (exampleTypeConversion7);


//Math
//operand x = 5+6
//operands: 5,6
//operator: +

//Unary operator
var x = 5;
x = -x; //x operand

var y = "3";
y = +y;


//Binary operator
var x = 1, y = 3;
y = x + y;


var exampleMath1 = 5 + 6;
var exampleMath2 = 5 - 6;
var exampleMath3 = 5 / 6;
var exampleMath4 = 5 * 6;

//Remainder остаток
var exampleMath5 = 5 % 2; //1 -> остаток
var exampleMath6 = 6 % 2 //0

//Exponent
var exampleMath7 = 2 ** 4; //16

var exampleMath8 = (4 - (3 + 4) * 8); //-52
// document.write(exampleMath8);

//Fast modify
var exampleMath9 = 4;
exampleMath9 += 5;//examplemath9 + 5
exampleMath9 -= 3; //exampleMath9 = examplemath9 - 3 


//Increment / decrement
var exampleMath10 = 0;
exampleMath10++;
// exampleMath10--; 
console.log(exampleMath10);

//Comparisons
var exampleComparison1 = 6 > 5;//true
var exampleComparison2 = 6 < 5; //false
var exampleComparison3 = 6 >= 5; //true
var exampleComparison4 = 6 <= 5; //false
var exampleComparison5 = 6 === 5; //false один знак = говорит равняется а == ленивое  сравнение === это четкое сравнение она всегда будет сравнивать число
var exampleComparison6 = 5 === 5; //true
var exampleComparison7 = 5 !== 5; //false
var exampleComparison8 = "5" == 5; //true
var exampleComparison9 = "5" != 5; //true  
// document.write ("5"===5); //"5" its a string 5 its a number they're not equals
// document.write("5" == 5);// два знака == превращают строку в число и ответ TRUEEE

//IF ELSE

// if (5 > 3) {
//   document.write("Hello world"); //true
// }
// else {
//   document.write("Bye world"); //false
// }

//pseudo code

/*
Если чайник кипит 
  выключить газ
Иначе
  проверить позже
 */


// var age = prompt("How old are you?");
// var votingYears = age - 18;
// if (votingYears === NaN){
//   alert("Wrong input. Numbers only")
// }
// else{
//   alert("You could've  vote for " + votingYears + " years"); 
// }


// var userNumber;
// while ( userNumber != "3.14") {
//   console.log(userNumber);
//   userNumber = prompt(" What is the number PI");
// }
/*
Начни с числа 1 
увеличивать число на единицу
пока число не будет 3
 */
// for (var index = 10; index >= 1; index -=2) { // in short "i"
//   document.write(index + " ");
// }

// var exampleFor = "Hello";
// for (var i=0; i<exampleFor.length; i++){
//   document.write(exampleFor[i] + "💡")
// }

//Functions
function sayHello(name, timeofDay) {
  document.write(`Hello ${name}, have a great ${timeofDay}`); 
}