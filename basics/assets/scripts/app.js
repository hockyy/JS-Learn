const defaultResult = 0;
let currentResult = defaultResult;
let outputHistory = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function writeLog(operId, preResult, input) {
  const currentLog = {
    operation: operId,
    preResult: preResult,
    input: input,
    result: currentResult,
  };
  outputHistory.push(currentLog);
  console.log(outputHistory);
}

function writeOutput(oper, preResult, curUserInput) {
  outputResult(currentResult, `${preResult} ${oper} ${curUserInput}`);
}

function solve(operType, operand) {
  const curUserInput = getUserInput();
  const preResult = currentResult;
  if (operand === "+") currentResult += curUserInput;
  else if (operand === "-") currentResult -= curUserInput;
  else if (operand === "/") currentResult /= curUserInput;
  else currentResult *= curUserInput;
  writeLog("operType", preResult, curUserInput);
  writeOutput(operand, preResult, curUserInput);
}

function add() {
  solve("Add", "+");
}

function subtract() {
  solve("Subtract", "-");
}

function divide() {
  solve("Divide", "/");
}

function multiply() {
  solve("Multiply", "*");
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

outputResult(currentResult, "");

alert("tes")