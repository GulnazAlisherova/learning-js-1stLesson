// let allP = document.querySelectorAll('p');
// for (let p of allP) {
//   p.style.flexBasis = "45%";
// }

// let button1 = document.querySelector('button:nth-of-type(1)');
// let button2 = document.querySelector('button:nth-of-type(2)');
// let button3 = document.querySelector('button:nth-of-type(3)');

// button1.addEventListener('click', function(){
//   for (let p of allP) {
//     // p.style.flexBasis = "90%";
//   }
//   document.write("Hello world");
// });
// button2.addEventListener('click', function(){
//   for (let p of allP) {
//     p.style.flexBasis = "45%";
//   }
// });
// button3.addEventListener('click', function(){
//   for (let p of allP) {
//     p.style.flexBasis = "30%";
//   }
// });

function replace(str) {
  let result = str.replaceAll("o", "lorem");
  console.log(result);
}
replace("Kyrgyz obondoru");

function replaceOnly(str) {
  let result2 = str.replace("o", "💡");
  console.log(result2);
}
replaceOnly("Kyrgyz obondoru");

function hasMyName(str) {
  if (str.includes("Gulnaz")) {
    console.log("Has my name");
  }
  else {
    console.log
  }
}

function february(x, y) {
  if (x % 4) {
    alert("This february is full");
  }
  else {

    alert("This february is not full");
  }
}
february(24, 23);

// как модифицировать документ
//method 1.
// document.body.innerHTML = "<h1>Hello world</h1>";