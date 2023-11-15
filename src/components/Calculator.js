import { useState } from "react";

export const Calculator = () => {
    const [countState, setCountState] = useState(0);
    

const increment = () => {
    setCountState(countState + 1);
}

const decrement = () => {
    setCountState(countState - 1);
}

const reset =() => {
    setCountState((prev) => prev = 0);
}

return (
    <div>
        <h1>Contor: {countState}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
)

}