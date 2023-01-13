// // var example1 = "Hello " + "world!";
// // console.log(example1);

// // // var example1 = "Hello " - "world!";
// // // console.log(example1);   минус нельзя использовать, только ПЛЮС!!

// // var example2 = "200" + 700;
// // console.log(example2);

// // var example3 = "10" + "10";
// // console.log(example3);

// // var age = prompt("How old are you?");
// // var year = 2023 - age;
// // console.log(year);

// // var year = prompt("What year Kyrgyzstan gained independence?");
// // if (year > 1991) {
// //   alert("This year is after independence year.");
// // }
// // else if (year === "1991"){
// //   alert("Good job!");
// // }
// // else {
// //   alert("This year is before independence year.");
// // }

// // var year2 = prompt("What year Italy gained independence?");
// // if (year2 > 1861){
// //   alert("This year is after indpendence year.");
// // }
// // else if( year2 === "1861"){
// //   alert("You got it!");
// // }
// // else {
// //   alert("This year is before independence year.");
// // }


// //next example
// // var currentNumber = 0;
// // var stopNumber = 100;
// // while(currentNumber < stopNumber) {
// //   currentNumber = currentNumber + 1;
// //   console.log(currentNumber);
// // }

// //another example

// // for (var i=1; i<=10; i++){
// //   console.log(i);
// // }

// var currentNumber = 20;
// var stopNumber = 0;

// while (currentNumber > stopNumber) {
//   currentNumber = currentNumber - 1;
//   console.log(currentNumber);
// }


// //example about city->capital

// var country = prompt("What is the country you wanna know capital of?")

// if (country === "USA") {
//   alert("Washington");
// }
// else if (country === "Kazakhstan") {
//   alert("Nur-Sultan");
// }

// else if (country === "London") {
//   alert("Paris");
// }
// else if (country === "China") {
//   alert("Pekin");
// }
//  else if (country === "Kyrgyzstan") {
//   alert("Bishkek");
// }
// else{
//   alert("We don't know that country");
// }

// названия функций не должны иметь: пробелы и должны писать вместе и все другие слова кроме первого должны быть написаны с большой буквы НАПРИМЕР -> finishMath, cookDinner

function callFriend (friendsName){
  console.log(friendsName);
  console.log("Pick up the phone");
  console.log("Type in the number");
  console.log("Press call");
  console.log("Wait for the answer");
}
callFriend("Bakyt");
callFriend("Akjol");
callFriend("Tima");