import { useEffect, useState } from "react"

const UseEffectHook = () => {

    const [notification,setNotification] = useState(0);

    const hello = () => {
        console.log('hello world');
    }

    const titleRender = () => {
        document.title = notification > 0 ? `Notification ${notification}` : 'App'
    }

    useEffect(titleRender,[notification,hello])


    return (
        <>
            <button onClick={()=>setNotification(notification+1)}>Add Notification : {notification}</button>
            <button onClick={()=>hello()}>hello</button>
        </>
    )
}

export default UseEffectHook

