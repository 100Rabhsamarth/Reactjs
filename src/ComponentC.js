import React, {useContext } from 'react'
import { CountContext} from './App'


function ComponentC (){
    const countContext = useContext(CountContext)
    return (
        <div className="App">
            ComponentB
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    );
}
export default ComponentC;





















// import React from "react";
// import './App.css';
// import { userContext,ChannelContext } from './App'

// function ComponentC() {
//     return (
//         <div className="App">
//             <userContext.Consumer>
//                 {
//                     user => {
//                         return (
//                             <ChannelContext.Consumer>
//                                 {
//                                     channel => {
//                                         return <h2>User Context value is {user}<br/>
//                                          channel context value is {channel} </h2>
//                                     }
//                                 }
//                             </ChannelContext.Consumer>)
//                     }
//                 }
//             </userContext.Consumer>
//         </div >
//     );
// }
// export default ComponentC;