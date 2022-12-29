const arr = [] // [5, 2, 7, 4, 10, 6, 3, 8, 9, 1]

for (let i = 0; i < 100; i++) {
    arr[i] = Math.round(Math.random() * 100)
}

console.log("Source array: ", arr)

function quickSort(arr) {
    const pivot = arr[0]
    let less = []
    let great = []
    let result = []

    if (arr.length < 2) {
        return arr
    } else {

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                less.push(arr[i])
            }
            if (arr[i] > pivot) {
                great.push(arr[i])
            }
        }
    }
    result = result.concat(quickSort(less),pivot,quickSort(great))
    return result
}

console.log("Sorted array: ",quickSort(arr))