function wait(sec) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('step A -', sec)
            res()
        }, sec * 1000)
    })
}

//let arr = [ wait(1), wait(5), wait(3)]

// Promise.all(arr)
//     .then(() => {
//         console.log('complete')
//     })


let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Preparing data...")
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000);
})

p.then(() => {
    console.log('step P - 1')
    return new Promise((res, rej) => {
        res()
    })
}).then((data) => {
    console.log('step P - 2-1')
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('step P - 2-2')
            res()
        }, 5000)
    })
}).then(() => {
    console.log('step P - 3')
    return new Promise((res, rej) => {

        Promise.all([wait(1), wait(5), wait(3)])
            .then(() => {
                console.log('complete')
                res()
            })

    })
}).then(() => {
        console.log('step P - 4')
        return new Promise((res, rej) => {
            res()
        })
    })
