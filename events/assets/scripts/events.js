const button = document.querySelector("button");

// button.onclick = () => {
//   alert("Tes");
// }

const buttonClickHandler = () => {
  alert("Clicked");
}

const anotherButtonClickHandler = () => {
  console.log("This button was clicked");
}

button.addEventListener("click", buttonClickHandler);
button.addEventListener("click", anotherButtonClickHandler );

// button.removeEventListener("click", buttonClickHandler);
// button.removeEventListener("click", anotherButtonClickHandler );

setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000);


// removeEventListener check same objects reference. (===)
// We have to make sure it stored in a ConstantSourceNode, and remove it later