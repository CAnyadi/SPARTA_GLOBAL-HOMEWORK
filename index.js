// alert ("hello JS!")
// alert("Hello! I am an alert box!!");

// var myQuestion = parseInt (prompt ("Is this a regular or irregular calculation ?"))
// if (myQuestion = myregular){
// console.log("Is it multiplication, addition, subtraction or division");
// }
// // attention to detail- there is no equals after )
// else {
//   console.log("Is it power or square root");
// }

// Var myFirstnumber = parseInt(prompt("value1"));
// Var mySecondnumber = parseInt(prompt("value2"));
// var operator = prompt ("What is the operation? add,multiplication,dividion,subtraction,power or root")
function cacl (){
var number1 = parseInt(prompt("value1"));
var number2 = parseInt(prompt("value2"));
var calculate;

var operator1 = "add";
var operator2 = "multiplication";
var operator3 = "division";
var operator4 = "subtraction";
var operator5 = "power"
// Var operator6 = "root"
var operator6 = "root"

if (operator1 == "add"){
  calculate= value1 + value2;
}
else if (operator2 == "multiplication"){
  calculate = value1 * value2;
}
else if (operator3 == "division"){
  calculate = value1 / value2;
}
else if (operator4 == "subtraction"){
  calculate = value1 - value2;
}

else if (operator == "power") {
  calculate =  pow(value1)
}

else if (operator == "root") {
  calculate = sqrt(value1);
}
console.log(calculate);

}
