import { useState } from "react";

const UseStateHook = () => {

    const [text, setText] = useState("");

    return(
        <> 
            <h1>{text}</h1> 
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </>
    )
}

export default UseStateHook