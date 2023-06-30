import {useRef} from "react";

const Main = () =>{
    const myRef = useRef(null)
        const handleClick = ()=>{
            myRef.current.focus()
        }
    return(<div>
        <input ref={myRef} type="text"/>
        <button onClick={handleClick}>start</button>
    </div>)
}
//useRef как queryselector
export default Main