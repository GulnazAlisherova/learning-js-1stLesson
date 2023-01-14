// // // var example1 = "Hello " + "world!";
// // // console.log(example1);

// // // // var example1 = "Hello " - "world!";
// // // // console.log(example1);   минус нельзя использовать, только ПЛЮС!!

// // // var example2 = "200" + 700;
// // // console.log(example2);

// // // var example3 = "10" + "10";
// // // console.log(example3);

// // // var age = prompt("How old are you?");
// // // var year = 2023 - age;
// // // console.log(year);

// // // var year = prompt("What year Kyrgyzstan gained independence?");
// // // if (year > 1991) {
// // //   alert("This year is after independence year.");
// // // }
// // // else if (year === "1991"){
// // //   alert("Good job!");
// // // }
// // // else {
// // //   alert("This year is before independence year.");
// // // }

// // // var year2 = prompt("What year Italy gained independence?");
// // // if (year2 > 1861){
// // //   alert("This year is after indpendence year.");
// // // }
// // // else if( year2 === "1861"){
// // //   alert("You got it!");
// // // }
// // // else {
// // //   alert("This year is before independence year.");
// // // }


// // //next example
// // // var currentNumber = 0;
// // // var stopNumber = 100;
// // // while(currentNumber < stopNumber) {
// // //   currentNumber = currentNumber + 1;
// // //   console.log(currentNumber);
// // // }

// // //another example

// // // for (var i=1; i<=10; i++){
// // //   console.log(i);
// // // }

// // var currentNumber = 20;
// // var stopNumber = 0;

// // while (currentNumber > stopNumber) {
// //   currentNumber = currentNumber - 1;
// //   console.log(currentNumber);
// // }


// // //example about city->capital

// // var country = prompt("What is the country you wanna know capital of?")

// // if (country === "USA") {
// //   alert("Washington");
// // }
// // else if (country === "Kazakhstan") {
// //   alert("Nur-Sultan");
// // }

// // else if (country === "London") {
// //   alert("Paris");
// // }
// // else if (country === "China") {
// //   alert("Pekin");
// // }
// //  else if (country === "Kyrgyzstan") {
// //   alert("Bishkek");
// // }
// // else{
// //   alert("We don't know that country");
// // }

// // названия функций не должны иметь: пробелы и должны писать вместе и все другие слова кроме первого должны быть написаны с большой буквы НАПРИМЕР -> finishMath, cookDinner

// function callFriend(friendsName = "Tom") { // если будет пустым т.е undefined  добавить Тома
//   console.log("Pick up the phone");
//   console.log("Type in the number " + friendsName);
//   console.log("Press call");
//   console.log("Wait for the answer");
// }
// // callFriend("Bakyt");
// // callFriend("Akjol");
// // callFriend("Tima");
// // callFriend();
// // callFriend(); 

// function calculateRectArea(a, b) {
//   console.log(a * b);
// }
// // calculateRectArea(5, 10);
// // calculateRectArea(10, 11);
// // calculateRectArea(1, 0);


// //pr2h
// function calculateCylinderVolume(r, h) { // ёмкость цилиндра
//   return 3.14 * r * r * h;
// }
// // var smallGlassVol = calculateCylinderVolume(3, 4);
// // var bottle = calculateCylinderVolume(4,10);

// // console.log(smallGlassVol);
// // console.log(bottle);

// // document.write("Hello ");
// // document.write("world <br> ");

// // document.writeln("<h1> bye world! </h1> <br>");
// // document.writeln("<h3> goodbye world </h3><br> <hr>");


// function countDown(number) {
//   for (let i = number; i > 0; i = i - 1) { //i--
//     document.write(i + " ");
//   }
//   document.write("<br>");
// }
// // countDown(5); 
// // countDown(18); 
// // countDown(prompt("Enter the number!", 100));

// // var number = Math.random();
// // document.write(number *100);

// //генерирует случайный цвет
// // function randomColor() {
// //   var red = Math.random() * 255; // по умолчанию возвращает число 0 и 1
// //   var blue = Math.random() * 255; // 0.2 * 255
// //   var green = Math.random() * 255;

// //   return `rgb(` + red + `, ` + green + `, ` + blue + `)`;

// // }
// // //здесь она красит текст в какойто цвет
// // function colorfulText(text, color) { 
// //   document.write(`<h1 style = "color: ` + color + `;">` + text + `</h1> `);
// // }
// // // создать переменную колор и получить рандом цвет и этот случайный цвет хранится в колор например красный оно передается в функцию ColorfulText как второй параметр
// // var color = randomColor();
// // colorfulText("Hello world!", color);
// // colorfulText("Bye world!", color);

// // function backgroundColor(){
// //   document.write(`<button style = "`)
// // }

// var studentFirstName = "Bakyt";
// var studentLastNAme = "Ulanov";  // все начинаются со стюдент 
// var studentAge = 20;
// var studentOccupied = false;



// // student- object
// var student = {
//   firstName: "Bakyt",
//   lastName: "Ulanov",
//   age: 20,
//   occupied: false,
//   sayHello: function () {
//     console.log("Hello, my name's " + this.firstName + " and I'm " + this.age + " years old!");
//   }
// };
// //output

// // document.write(studentFirstName);  -> переменные
// // document.write(student.age); // -> object т.е через точку 
// // document.write(student.firstName);
// // console.log(student.firstName + " " + student.lastName);


// // var dog = {
// //   name: "Kumaiyk",
// //   age: 2,
// // }
// // document.write(dog.age);
// // //update
// // dog.age = 3;
// // document.write(dog.age);

// var dog = {
//   name: "Kumaiyk",
//   age: 2,
// }
// //update
// dog.age = 3;
// // document.write(dog.age);

// // //add
// // console.log(dog.color);
// dog.color = "gray";
// console.log(dog.color);

// //delete
// delete dog.color;

// //Methods
// // alert("hello");//function
// // confirm(); //function
// // console.log("hello"); //method
// // document.write();



// // function exampleFunction (){
// //  это то как создаем функцию
// // }

// // how to made a method
// //  dog.bark = function() {
// //   console.log("Woof, woof, woof!");
// //  }
// //  dog.bark();
// //  dog.bark();

// // student.sayHello(); // первый раз выводит про Бакыта

// // student.sayHello();
// // student.firstName = "Aijan";
// // student.age = 19;
// // student.sayHello(); // а здесь про Айжан

// // student.sayHello();


// //ARRAYs

// var shoppingList1 = "apple";
// var shoppingList2 = "pear"; // incorrect

// var shoppingList = [
//   "apple", "lime", "pineapple", "cherry", "potato",
// ];

// console.log(shoppingList1) // its from first example NOT ARRAY
// //output
// console.log(shoppingList[2]);
// console.log(shoppingList[3 ]);

// //update
// shoppingList[4] = "Tomato";
// console.log(shoppingList[4]); 

// //add to the end
// shoppingList.push("cherry");
// console.log(shoppingList); 

// //add to the beginning
// shoppingList.unshift("salt");
// console.log(shoppingList); 

// //remove from the end
// shoppingList.pop();
// console.log(shoppingList);

// //remove from the begining
// shoppingList.shift();
// console.log(shoppingList);

// //show the list length

// console.log(shoppingList.length);

// //вывод на HTML
// document.write("<ul>");
// for (let i = 0; i < shoppingList.length; i++) {
//    document.write(" <li>" + shoppingList[i] + "</li>");
// }
// document.write("</ul>");


// //built in properties and methods of strings and numbers

// var numberExample1 = Math.random();
// console.log(numberExample1.toFixed(4));


// var numberExample2 = 3.14159265;
// console.log(numberExample2.toFixed(2));

// //for string

// var stringExample1 = "Hello world. ";
// console.log(stringExample1.length);


// var stringExample2 = "Hello world. ";
// console.log(stringExample2.toLowerCase());

 
// var stringExample3 = "Hello world. ";
// console.log(stringExample3.toUpperCase());

// var stringExample4 = "         Hello world.     ";
// console.log(stringExample4.trim());

// var stringExample5 = "Hello world. ";
// console.log(stringExample5.includes("tom"));
