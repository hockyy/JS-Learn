const buttons = document.querySelectorAll("button");

// button.onclick = () => {
//   alert("Tes");
// }

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
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

function scrollHandler(){
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  console.log(document.body.getBoundingClientRect());

  clientHeight = document.documentElement.clientHeight;

  console.log(clientHeight);

  return;
  
  if(distanceToBottom < clientHeight+150){
    currentElement = document.createElement("div");
    currentElement.style.height = "3000px";
    curElementNumber++;
    document.body.append(currentElement)
  }
}

// removeEventListener check same objects reference. (===)
// We have to make sure it stored in a ConstantSourceNode, and remove it later

// Bind create a new function object!!!!!!!!!!, you must store a bind function in a new constant, if you want to remove it.
