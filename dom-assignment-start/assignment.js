// const task1 = document.getElementById('task-1');
const task1 = document.querySelector('#task-1')
task1.style.color = "white";
task1.style.backgroundColor = "black";

// const docTitle = document.querySelector("head title");
const docHead = document.head;
console.log(docHead);
const docTitle = docHead.querySelector("title");
docTitle.textContent = "Assignment - Solved!";

// const header = document.getElementsByTagName("h1");
const header = document.querySelector("body h1");
header.textContent = "Assignment - Solved!";