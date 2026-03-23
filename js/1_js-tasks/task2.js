let mark = parseInt(prompt("Enter your mark:"))
if (mark <= 100 && mark >= 90) {
document.write("A+")
} else if (mark <= 89 && mark >= 80) {
    document.write("A")
} else if (mark <= 79 && mark >= 70) {
    document.write("B")
} else if (mark <= 69 && mark >= 60) {
    document.write("C")
} else if (mark <= 59 && mark >= 50) {
    document.write("E")
} else if (mark < 50 && mark >= 0) {
    document.write("FAIL")
} else {
    document.write("not a valid mark, use (0-100)")
}
