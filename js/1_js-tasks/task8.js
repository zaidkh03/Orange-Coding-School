let age = parseInt(prompt("enter your age"))

if (age >= 60) {
    console.log("You are a Senior")
    alert("You are a Senior")
} else if (age <= 59 && age >= 20) {
    console.log("You are an Adult")
    alert("You are an Adult")
} else if (age <= 19 && age >= 13) {
    console.log("You are a Teenager")
    alert("You are a Teenager")
} else if (age <= 13 && age >= 1) {
    console.log("You are a Child")
    alert("You are a Child")
} else {
    console.log("You are not born yet")
    alert("You are not born yet")
}