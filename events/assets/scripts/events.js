const buttons = document.querySelectorAll("button");

// button.onclick = () => {
//   alert("Tes");
// }

const buttonClickHandler = event => {
  // event.target.disabled = true;
  // console.log(event);
  // alert("Clicked");
};

const anotherButtonClickHandler = () => {
  console.log("This button was clicked");
};

// button.addEventListener("click", buttonClickHandler);
// button.addEventListener("click", anotherButtonClickHandler );

// button.removeEventListener("click", buttonClickHandler);
// button.removeEventListener("click", anotherButtonClickHandler );

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

buttons.forEach(btn => {
  btn.addEventListener("click", buttonClickHandler);
});

window.addEventListener("scroll", event => {
  console.log(event);
  scrollHandler();
});

let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  // console.log(document.body.getBoundingClientRect());

  clientHeight = document.documentElement.clientHeight;

  // console.log(clientHeight);

  return;

  if (distanceToBottom < clientHeight + 150) {
    currentElement = document.createElement("div");
    currentElement.style.height = "3000px";
    curElementNumber++;
    document.body.append(currentElement);
  }
}

// removeEventListener check same objects reference. (===)
// We have to make sure it stored in a ConstantSourceNode, and remove it later

// Bind create a new function object!!!!!!!!!!, you must store a bind function in a new constant, if you want to remove it.

const submitHandler = event => {
  event.preventDefault();
  console.log(event);
};

const form = document.querySelector("form");
form.addEventListener("submit", submitHandler);

const div = document.querySelector("div");
const button = document.querySelector("button");
const bod = document.body;

// Event propagation

button.addEventListener(
  "click",
  event => {
    // event.stopPropagation();
    console.log("button clicked");
    console.log(event);
  },
  true
);

// bod.addEventListener(
//   "click",
//   event => {
//     // event.stopPropagation();
//     console.log("Body clicked");
//     console.log(event);
//   },
//   true
// );

div.addEventListener("click", event => {
  // event.stopPropagation();
  console.log("Div clicked");
  console.log(event);
});

// Trickle Down, Bubble up
// Button, body, div
// bubble up trickle down

// Event delegation

const allLi = document.querySelectorAll("li");
const ul = document.querySelector("ul");

// const liHandler = event => {
//   event.target.classList.toggle("highlight");
// }

// for(const li of allLi){
//   li.addEventListener("click", liHandler);
// }

// Event delegation pattern
ul.addEventListener("click", event => {
  // Event target is always the deepest bubble, can be buggy be careful
  console.log(event.currentTarget); // Reverse to the assigned target
  console.log(event.target);

  // Closest get closest ancestor with certain tag
  console.log(event.target.closest("li"));

  const currentLi = event.target.closest("li");
  currentLi.classList.toggle("highlight");
  // form.click();
  form.querySelector("button").click();
  // div.click();
});