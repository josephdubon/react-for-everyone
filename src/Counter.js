import {useState} from "react";

export function Counter() {

    const [count, setCount] = useState(0) // set default state to 0

    return (<div>
        <h3>{count}</h3>
        <button
            onClick={() => setCount(count + 1)}>
            +
        </button>

        <button
            onClick={() => setCount(count - 1)}>
            -
        </button>

        {/* Reset Count */}
        <button
            onClick={() => setCount(0)}>
            RESET COUNTER
        </button>
    </div>)
}