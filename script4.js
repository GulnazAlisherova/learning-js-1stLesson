// document.body.style.background = "lightblue";
// document.body.textContent = "Hello guys";

// document.getElementById("hello-world").textContent = "Nice to meet ya";
// document.getElementById("hello-world").style.background = "blue";
// document.getElementById("hello-world").style.color = "white";

//optimizition

//get element by id
let helloWorldDiv = document.getElementById("hello-world");

helloWorldDiv.textContent = "Nice to meet you!";
helloWorldDiv.style.color= "white";
helloWorldDiv.style.background= "green";
helloWorldDiv.style.textDecoration= "underline";
helloWorldDiv.style.fontSize= "20px"; // numbers should write in ""


//get element by tag name
let allParagraphs = document.getElementsByTagName("p");
// console.log(allParagraphs);

for (let paragraphs of allParagraphs){
  paragraphs.style.backgroundColor = "blue";
  paragraphs.style.color = "wheat";
  paragraphs.style.fontWeight = "700"
}
// getElementsByClassName
let className = document.getElementsByClassName("hello-world");

for(let classes of className) {
  classes.style.color="red";
}
