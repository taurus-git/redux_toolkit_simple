import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/slices/counterSlice";
import { getCount } from "./store/selectors/selectors";

function App() {
    const count = useSelector( getCount );
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={ () => dispatch( (increment()) ) }>Increment</button>
            <span>{ count }</span>
            <button onClick={ () => dispatch( (decrement()) ) }>Decrement</button>
        </div>
    )
}

export default App;
