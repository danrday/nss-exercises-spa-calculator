
var outputArea = document.getElementById("outputArea");

function add2Vars(x, y) {
  var xValue = document.getElementById("xValue").value;
  var yValue = document.getElementById("yValue").value;
  var calc = (parseInt(yValue) + parseInt(xValue));
  outputArea.innerHTML = calc;
}

function subtract2Vars(x, y) {
  var xValue = document.getElementById("xValue").value;
  var yValue = document.getElementById("yValue").value;
  var calc = (xValue - yValue);
  outputArea.innerHTML = calc;
}

function multply2Vars(x, y) {
  var xValue = document.getElementById("xValue").value;
  var yValue = document.getElementById("yValue").value;
  var calc = (xValue * yValue);
  outputArea.innerHTML = calc;
}

function divide2Vars(x, y) {
  var xValue = document.getElementById("xValue").value;
  var yValue = document.getElementById("yValue").value;
  var calc = (xValue / yValue);
  outputArea.innerHTML = calc;
}


var divide = document.getElementById("divide");

var multiply = document.getElementById("multiply");

var add = document.getElementById("add");

var subtract = document.getElementById("subtract");

divide.addEventListener("click", divide2Vars);
multiply.addEventListener("click", multply2Vars);
add.addEventListener("click", add2Vars);
subtract.addEventListener("click", subtract2Vars);