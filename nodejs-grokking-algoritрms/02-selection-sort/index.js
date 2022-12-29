let arr = []

for (let i = 0; i < 10; i++) {
    arr[i] = Math.round(Math.random() * 100)
}

console.log(arr)

function bubleSort(arr) {
    let counter = 0
    let isSorted = false
    let tmp;
    while (!isSorted) {
        isSorted = true
        for (let a = 0; a < arr.length; a++) {
            counter++
            if (arr[a] > arr[a + 1]) {
                tmp = arr[a]
                arr[a] = arr[a + 1]
                arr[a + 1] = tmp
                isSorted = false
            }
        }
    }
    console.log(`Number of itterations: ${counter}`)
    return arr
}

function selectionSort(arr){

    function findSmallest(arr) {
        let smallest = arr[0]
        let smallest_index = 0
        for (let i=1; i<= arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i]
                smallest_index = i
            }
        }
        return smallest_index
    }

    let sourceArr = arr
    let newArr = []
    let smallest_idx
    let arrLength =arr.length
    for (let k=0; k<arrLength; k++){
        smallest_idx = findSmallest(sourceArr)
        newArr.push(sourceArr[smallest_idx])
        sourceArr.splice(smallest_idx,1);
    }
    return newArr
}

//console.log(bubleSort(arr));
//console.log(findSmallest(arr));
console.log(selectionSort(arr));
