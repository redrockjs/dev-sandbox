// for (let i=0; i<3; i++) {
//     setTimeout( function () {
//         console.log(i)
//         } , 1000)
// }

/////////////////////////////////////

// "use strict";
// const details = {
//     message: "Hello!",
// }
//
// function getMessage() {
//     return this.message;
// }
//
// console.log(getMessage.call(details))

/////////////////////////////////////

// var name = "John";
//
// var user = {
//     name: "Peter",
//     printMessage() {
//         console.log(`Hello, ${this.name}!`);
//     }
// }
//
// var printMessage = user.printMessage;
//
// printMessage();

/////////////////////////////////////

//function foo() { console.log(this);} ; foo.call(null); // windows in chrome console

/////////////////////////////////////

// (function (a) { arguments[0] = 10; return a;  }) (5); // 10 in chrome console

/////////////////////////////////////

// 2nd variant
// function  foo() {
//     console.log(arguments);
// }
//
// foo();

/////////////////////////////////////

// var name = "John";
//
// function printName() {
//     console.log(name);
//     var name = "Peter";
//     console.log(name);
// }
//
// printName(); //-> undefined "Peter"

/////////////////////////////////////

// let name = "John";
// function printName() {
//     console.log(name)
// }
//
// setTimeout( ()=> {
//     let name= "Peter";
//     printName();
// }, 1000); // -> 'John'

/////////////////////////////////////

// const details = {
//     name: "John",
// }
//
// function getMessage(message) {
//     return `${message} ${this.name}`
// }
//
// console.log(getMessage.apply(details,['Hello'])); // -> 'Hello John'

/////////////////////////////////////

// const foo = bar();
// const number = 2;
// function bar() { return number }

/////////////////////////////////////

// function getThis() {  return this; } ; getThis(); // -> object window

/////////////////////////////////////

// let f = function g() { return 23; }
//
// console.log(typeof g());

/////////////////////////////////////
//
// let f = (a,b) => {a+b}
//
// console.log(f(1,5))

/////////////////////////////////////

// console.log(message);
// var message = "Hello";

/////////////////////////////////////

// "use strict";
//
// function getThis() {
//     return this;
// }
//
// console.log(getThis());

/////////////////////////////////////

// let name = "John";
//
// function printName() {
//     let name = "Peter";
//     console.log(name);
// }
// printName(); // -> 'Peter'

/////////////////////////////////////

// printMessage();
//
// function printMessage() {
//     console.log("Hello!");
// } // -> "Hello!"

/////////////////////////////////////
//
// for (var i=0;i<10;i++) {
//
// }
// console.log(i); //-> 10

/////////////////////////////////////
// function foo(a,b) { return a*b;}
//
// const bar = foo.bind(null,2);
// console.log(bar(2))

/////////////////////////////////////

// console.log(message);
// let message = "Hello";

/////////////////////////////////////

// var a=1, b = function a(x) { x&& a(--x);};
// console.log(a) //-> 1

/////////////////////////////////////
// function foo() {
//     return {bar:1};
// }
// console.log(typeof foo().bar) // ->1

/////////////////////////////////////

// for (var i=0; i<3; i++) {
//     setTimeout( function () {
//         console.log(i)
//     },1000)
// } //-> 3 3 3 