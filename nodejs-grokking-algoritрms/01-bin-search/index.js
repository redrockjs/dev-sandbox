let arr =[] // = [1,3,5,7,9,11,13,15,17,19]

for (let i=1; i<101; i++) {
    arr[i-1] = i
}
console.log(arr)

function binarySearch(arr,item) {
    let low = 0
    let mid
    let high = arr.length
    let guess
    console.log(low,high)

    while (low < high) {
        mid = Math.floor((low+high)/2)
        guess = arr[mid]
        if (guess == item) {
            return mid+1
        }
        if (guess > item) {
            high = mid
        } else {
            low = mid
        }
        console.log(item,guess," ",mid,low,high)
    }
    return "Nothing is found"
}

console.log(binarySearch(arr,98))
