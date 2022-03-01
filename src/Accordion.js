import {useState} from "react";

import './App.css';

export function Accordion() {
    const [isToggle, setIsToggle] = useState(false) // default to hidden
    const showMe = isToggle ? (<h2>Boo Yah!</h2>) : null // ternary operation for conditional rendering

    return (
        <div className="App">
            {showMe}
            <button
                onClick={() => {
                    setIsToggle(!isToggle)
                }}>Toggle Element
            </button>
        </div>)
}