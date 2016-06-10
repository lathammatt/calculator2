
//   Create a function that multiplies two numbers
//   passed in as arguments. Return the product.
//  */
//  innerHTML, .value, valueAsNumbergets undefined
var inputOne = document.getElementById("digit1");
// console.log(inputOne);
var inputTwo = document.getElementById("digit2")
// console.log(inputTwo);


var addButton = document.getElementsByTagName("button")[0];
var minusButton = document.getElementsByTagName("button")[1];
var multButton = document.getElementsByTagName("button")[2];
var divButton = document.getElementsByTagName("button")[3];


var finalResult = document.getElementById("answer");








addButton.addEventListener("click", function() {
  var solution = addInput(parseInt(inputOne.value), parseInt(inputTwo.value));
  // console.log("test", solution);
  finalResult.innerHTML = `The answer is ${solution}`; 
}); 


minusButton.addEventListener("click", function(){
  var solution = subInput(parseInt(inputOne.value), parseInt(inputTwo.value));
  // console.log("test", solution);
  finalResult.innerHTML = `The answer is ${solution}`; 
}); 


multButton.addEventListener("click", function() {
  var solution = multInput(parseInt(inputOne.value), parseInt(inputTwo.value));
  // console.log("test", solution);
  finalResult.innerHTML = `The answer is ${solution}`; 
});


divButton.addEventListener("click", function() {
  var solution = divInput(parseInt(inputOne.value), parseInt(inputTwo.value));
  // console.log("test", solution);
  finalResult.innerHTML = `The answer is ${solution}`; 
});




function multInput(inputOne, inputTwo){
  return inputOne * inputTwo;

}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addInput(inputOne, inputTwo) {
  // console.log(inputOne, inputTwo);
  return inputOne + inputTwo;
  // finalResult.innerHTML += "The answer is ${solution}"; 

}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subInput(inputOne, inputTwo) {
  return inputOne - inputTwo;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divInput(inputOne, inputTwo) {
  return inputOne / inputTwo;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
// */
function doAll(inputOne, inputTwo, func) {


}