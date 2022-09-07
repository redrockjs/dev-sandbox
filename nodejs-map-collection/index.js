// let mapNums = new Map([
//     ["111","3"],
//     ["110","2"],
//     ["1111","4"],
//     ["1000","1"]
// ])
//
// for (let el of mapNums) {
//     console.log(el)
// }
//
// console.log(Object.keys(mapNums).sort())

// const dict = {
//     "x": 1,
//     "y": 6,
//     "z": 9,
//     "a": 5,
//     "b": 7,
//     "c": 11,
//     "d": 17,
//     "t": 3
// };
//
// // Create items array
// let arr = Object.keys(dict).map( (key) => [key, dict[key]]);
//
// // Sort the array based on the second element
// arr.sort( (a, b) =>  a[1] - b[1] )
//
// // Create a new array with only the first 5 items
// console.log(arr);

let arr=[1,2,3];

let f =(arr)=> {
    window.arr = [4,5,6]
}
f(arr)

console.log(arr)


function sortByBit(arr) {

    //console.log("Source array:", arr)

    let countBits = (binary) => binary.split("").reduce((sum, el) => sum + Number(el), 0)

    let binArr = arr.map(el => parseInt(el).toString(2))
    //console.log("Binary array:", binArr)

    let weightArr = binArr.map(el => countBits(el))
    //console.log("Weight array:", weightArr)

    let tmpArr = arr.map( (el,idx) =>  [el, weightArr[idx]] )
        .sort((a, b) => {
            return a[1] - b[1]
        })

    tmpArr.sort( (a,b)=> {
        if (a[1] === b[1] && a[0] < b[0]) {
            return -1
        }
    })

    //console.log(tmpArr);

    arr = tmpArr.map( el=> el[0])
    //console.log("Result array",result)

    //console.log(Array.isArray(result))
    //console.log(typeof arr)

    return arr
}