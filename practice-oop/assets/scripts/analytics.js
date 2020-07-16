intervalID = setInterval(() => {
  console.log("Sending analytics...");
}, 1000);


buttonEl.addEventListener("click", () => {
  clearInterval(intervalID);
  console.log(intervalID + " has bean cleared");
});