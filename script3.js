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
var exampleSymbol  = Symbol("id");  

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