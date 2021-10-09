import React, {useEffect, useState} from "react";

export const UseEffectHook = () => {



    useEffect( ()=> {
        console.log(localStorage.getItem("1"))
    },[])


    let effects = "Hello"

    let [count,setCount] = useState(1)

    let CountPlus1 = () => {
        let cnt = count+1
        setCount(cnt)
    }

    let CountMinus1 = () => {
        let cnt = count-1
        setCount(cnt)
    }

    return <div style={{ "padding": "20px"}}>

        <p>Current counter: {count}</p>
        <button onClick={CountMinus1}>-</button>
        <button onClick={CountPlus1}>+</button>
        <p>{effects}</p>
        <button> Set Bye! </button>
    </div>
}