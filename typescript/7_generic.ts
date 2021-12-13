const arrOfNumbers: Array<number> = [1,2,3,4,5]

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}