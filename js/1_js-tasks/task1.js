console.log("")
let operator = prompt("enter an operation:")
let num1 = parseInt(prompt("enter first number"))
let num2 = parseInt(prompt("enter second number"))
let result
if (operator == "+") {
    result = num1 + num2
    console.log(result)
} else if (operator == "-") {
    result = num1 - num2
    console.log(result)
} else if (operator == "*") {
    result = num1 * num2
    console.log(result)
} else if (operator == "/") {
    result = num1 / num2
    console.log(result)
} else {
    console.log("wrong operator, use (+, -, *, /)")
}

document.getElementById("result").innerHTML = num1 + " " + operator + " " + num2 + " = " + result
