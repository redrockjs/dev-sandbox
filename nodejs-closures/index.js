// let name = "John";
//
// function sayHi() {
//     console.log("Hi, " + name);
// }
//
// name = "Pete";
//
// sayHi(); // что будет показано: "John" или "Pete"?

function makeWorker() {
    let name = "Pete";

    return function() {
        console.log(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)