// alert ("hello JS!")
// alert("Hello! I am an alert box!!");

var myQuestion = prompt ("Is this a regular or irregular calculation ?")
if (myQuestion == "regular"){
  var myNumber = parseInt (prompt ("Insert your first value here"))
  var myNumber2 = parseInt (prompt ("Insert your second value here"))
  var myOperation = prompt ("Is it multiplication, addition, subtraction or division?");

  if (myOperation =="multiplication"){
    console.log( myNumber * myNumber2 );
  }
  else if (myOperation =="addition") {
    console.log( myNumber + myNumber2);
  }
  else if (myOperation == "subtraction") {
    console.log( myNumber - myNumber2);
  }
  else if (myOperation = "division") {
    console.log( myNumber / myNumber2);
  }
  else {
    console.log("error please input on from the following:multiplication, addition, subtraction or division?")
  }
}

else if (myQuestion == "irregular") {
  var myNumber = parseInt (prompt ("Insert your first value here"))
  // var myNumber2 = parseInt (prompt ("Insert your second value here"))
  var myOperation = prompt ("Power or root");

  if (myOperation =="power"){
    console.log( Math.pow(myNumber,2));
  }
  else if (myOperation =="root") {
    console.log( Math.sqrt(myNumber));
  }
  else {
      console.log("error please input on from the following: power or root")
    }
  }

else {
  console.log("Error please input regular or irregular only");
}


//   console.log("Is it power or square root")







// Var myFirstnumber = parseInt(prompt("value1"));
// Var mySecondnumber = parseInt(prompt("value2"));
// var operator = prompt ("What is the operation? add,multiplication,dividion,subtraction,power or root")
// function calc (){
// var number1 = parseInt(prompt("value1"));
// var number2 = parseInt(prompt("value2"));
// var calculate;
//
// var operator1 = "add";
// var operator2 = "multiplication";
// var operator3 = "division";
// var operator4 = "subtraction";
// var operator5 = "power"
// // Var operator6 = "root"
// var operator6 = "root"
//
// if (operator1 == "add"){
//   calculate = value1 + value2;
// }
// else if (operator2 == "multiplication"){
//   calculate = value1 * value2;
// }
// else if (operator3 == "division"){
//   calculate = value1 / value2;
// }
// else if (operator4 == "subtraction"){
//   calculate = value1 - value2;
// }
//
// else if (operator == "power") {
//   calculate =  pow(value1)
// }
//
// else if (operator == "root") {
//   calculate = sqrt(value1);
// }
// console.log(calculate);
//
// }
