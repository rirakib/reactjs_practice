import { useState } from "react"

const Count = () => {


    const [number,setNumber] = useState(0)
    
    return (
        <>
            <button onClick={()=>setNumber(number-1)}>-</button>{number}<button onClick={()=>setNumber(number+1)}>+</button>
        </>
    )
}

export default Count