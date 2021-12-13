interface Rectangle {
    readonly id: string
    color?: string
    size: {
        width:number
        height:number
    }
}


const rect1: Rectangle = {
    id: '1234',
    size: {
        width:20,
        height:20
    }
}

const rect2: Rectangle = {
    id: '12345',
    size: {
        width: 10,
        height:5
    }
}

rect2.color = 'black'

const rect3 = {} as Rectangle
const rect4 = <Rectangle>{}


// **********************************

interface RectangleWithArea extends Rectangle {
    getArea: () => number
}

const rect5: RectangleWithArea ={
    id: '123',
    size: {
        width:20,
        height: 20
    },
    getArea(): number {
        return this.size.width*this.size.height
    }
}

// **********************************

interface IClock {
    time: Date,
    setTime(date: Date):void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date) {
        this.time = date
    }
}

// **********************************

interface Styles {
    [key:string]:string
}

const css = {
    border: '1px solid black',
    margin: '2px',
    borderRadius: '5px'
}