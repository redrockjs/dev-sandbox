function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Alex',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// IIFE
person.logInfo.bind(lena, 'Frontend', '+1-585-300-12-34')()

// Call will start func now with params
person.logInfo.call(lena, 'Frontend', '+1-585-300-12-34')

// Apply will start func now with params in Array
person.logInfo.apply(lena, ['Frontend', '+1-585-300-12-34'])


