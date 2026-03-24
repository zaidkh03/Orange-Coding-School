// Hoisting Trap
// console.log(a)  // undefined
// var a = 10
// var declarations are hoisted to top of scope and initialized as undefined
// so it's like: var a = undefined; console.log(a); a = 10;

// Temporal Dead Zone (TDZ)
// console.log(a)  // ReferenceError: Cannot access 'a' before initialization
// let a = 10
// let is hoisted but NOT initialized — accessing it before declaration throws TDZ error

// Function vs Block Scope
// var x = 1
// function test() {
//     if (true) { var x = 2 }  // var is function-scoped, not block-scoped
//     console.log(x)            // 2 — inner var x overwrites within function
// }
// test()
// console.log(x)                // 1 — outer x unchanged

// Shadowing + TDZ Trap
// let x = 10
// function test() {
//     console.log(x)  // ReferenceError: Cannot access 'x' before initialization
//     let x = 20      // this let creates a new block scope, putting x in TDZ
// }
// test()
// the inner let x shadows the outer x, but triggers TDZ before its declaration

// Classic Closure Problem (var)
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0)
// }
// Output: 3, 3, 3
// var is function-scoped — all callbacks share the same i
// by the time they run, the loop is done and i = 3

// Closure with let
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0)
// }
// Output: 0, 1, 2
// let is block-scoped — each iteration gets its own separate i

// Nested Scope (Closure)
// var a = 1
// function outer() {
//     var a = 2
//     function inner() { console.log(a) }  // closes over outer's a
//     inner()
// }
// outer()  // 2 — inner() looks up scope chain and finds outer's a = 2

// Re-declaration Error
// var a = 10
// let a = 20  // SyntaxError: Identifier 'a' has already been declared
// you cannot re-declare a var variable using let in the same scope

// Function Hoisting vs Variable Hoisting
// console.log(foo)  // ƒ foo() { return 20 }
// var foo = 10
// function foo() { return 20 }
// function declarations are hoisted FULLY (name + body) before var declarations
// so foo is the function at the time of console.log

// Scope + Mutation
// let a = 10
// function test() { a = 20 }  // modifies outer a directly (no new declaration)
// test()
// console.log(a)  // 20

// Block Scope Leakage (var)
// { var a = 10 }
// console.log(a)  // 10 — var ignores block scope {} and leaks to outer scope

// Block Scope (let)
// { let a = 10 }
// console.log(a)  // ReferenceError: a is not defined
// let is block-scoped — dies at the closing }

// Parameter Shadowing
// let a = 5
// function test(a) { console.log(a) }  // parameter a shadows outer a
// test(10)  // 10 — parameter takes priority inside the function

// Closure + Async Trap
// function test() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => console.log(i), 100)
//     }
// }
// test()  // 3, 3, 3
// same as #5 — var shares one i across all callbacks, loop ends before timeouts fire

// IIFE Fix (Advanced)
// for (var i = 0; i < 3; i++) {
//     (function(i) {
//         setTimeout(() => console.log(i), 0)
//     })(i)
// }
// Output: 0, 1, 2
// IIFE creates a new function scope for each iteration
// each callback closes over its own copy of i passed as argument