import React, { useReducer } from "react";
import './App.css';

const initialState = {
    count: 0,
    counter: 0
}
const reducer = (state, action) => {
    // console.log(state.count)
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return initialState
        case 'increment2':
            return { counter: state.counter + 10 }
        case 'decrement2':
            return { counter: state.counter - 10 }
        case 'reset2':
            return initialState

    }

}
function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <div className="App">
            <h2>count : {state.count}</h2>
            <h2>counter : {state.counter}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset', })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment2' })}>Increment10</button>
            <button onClick={() => dispatch({ type: 'decrement2' })}>Decrement10</button>
            <button onClick={() => dispatch({ type: 'reset2' })}>Reset10</button>
        </div>
    );
}
export default Reducer;