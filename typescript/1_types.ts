//**************************
const str: string = 'Hello';
console.log(str)

//**************************
const isFetching: boolean = true;
const isLoading: boolean = false;

let int: number = 42
let float: number = 4.2
let num: number = 3e10

let message: string = 'Hello Typescript'

//**************************
const numberArr: number[] = [1, 2, 3, 4, 5, 6, 7]
const numberArr2: Array<number> = [1, 2, 3, 4, 5, 6, 7]
const wordsArr: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['IvanovAM', 1324567]

// Any
let variable: any = 42
variable = 'New string'
variable = []

//**************************
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Hello there!')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infiniteLoop():never{
    while(true){
    }
}

// Type

type Login = string
const login:Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined

