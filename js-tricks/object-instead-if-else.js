// Source https://enlear.academy/dont-use-switch-or-if-else-in-javascript-instead-try-this-82f32616c269

const expr = 'Apple';

//  if-else behavior
if (expr === 'Orange') {
    console.log('Orange');
} else if (expr === 'Banana') {
    console.log('Banana')
} else if (expr === 'Mango') {
    console.log('Mango');
} else {
    console.log('Sorry, we are out of ' + expr)
}

// use object selection
const matched = match(expr, {
    Orange: 'Orange',
    Banana: 'Banana',
    Mango: 'Mango',
    default: `Sorry, we are out of ${expr}`
})

console.log(matched);
