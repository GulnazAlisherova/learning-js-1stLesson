let allP = document.querySelectorAll('p');
for (let p of allP) {
  p.style.flexBasis = "45%";
}

let button1 = document.querySelector('button:nth-of-type(1)');
let button2 = document.querySelector('button:nth-of-type(2)');
let button3 = document.querySelector('button:nth-of-type(3)');

button1.addEventListener('click', function(){
  for (let p of allP) {
    p.style.flexBasis = "90%";
  }
});
button2.addEventListener('click', function(){
  for (let p of allP) {
    p.style.flexBasis = "45%";
  }
});
button3.addEventListener('click', function(){
  for (let p of allP) {
    p.style.flexBasis = "30%";
  }
});