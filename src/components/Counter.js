import React, { useState } from 'react'



function Counter(props){

    const [count, setCount] = useState(0)

    // const changeCount = (amount) =>{
    //     setCount( (prevCount) =>{
    //         return prevCount + amount
    //     })
    // }
    
    const increment = () =>{
        setCount(prevCount => {
            return prevCount + 1;
        })
        
        //For the second counter which displays an alert as well
        if (props.message === "alert"){
            alert("Counter Incremented")
        }
    }

    const decrement = () =>{
        setCount(prevCount => {
            return prevCount - 1;
        })
        if (props.message === "alert"){
            alert("Counter Decremented")
        }
    }

    return(
        <div>
            <h1> Counter : {count}</h1>
            <button onClick = {() => increment()}> Increment</button>
            <button onClick = {() => decrement()}> Decrement</button>
        </div>
    )

}

export default Counter;
