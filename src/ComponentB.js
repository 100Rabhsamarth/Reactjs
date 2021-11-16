


import React, { useReducer } from 'react'
import ComponentA from './ComponentA';
import ComponentC from './ComponentC';
import './App.css';


export const CountContext = React.createContext()

const initialState = 0
const reducer = (state,action) => {

  switch (action) {
    case 'increment':
      return state + 1 
    case 'decrement':
      return state - 1 
    case 'reset':
      return initialState
    default:
      return state


  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        count: {count}
        <ComponentA />
        <ComponentC />
      </CountContext.Provider>
    </div >
  );
}

export default App;






































// import React,{useContext } from "react";
// import './App.css';
// import { userContext,ChannelContext } from './App'

// function ComponentB ()
// {
//     const user = useContext(userContext)
//     const Channel = useContext(ChannelContext)
//     return(
//         <div className="App">
//             <h2>{user} {Channel}</h2>
//         </div>
//     );
// }
// export default ComponentB;