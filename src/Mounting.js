import React from 'react'
import './App.css';
import Unmount from './Unmount';

class Mount extends React.Component {

    constructor()
    {
        super();
        this.state={
            show:true
        }
    }
    
    render() {
        return (
            <div className="App">
                {    this.state.show?
                     <Unmount />:<h2>child component removed</h2>
                     
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle child component</button>
            </div>
        );
    }
}
export default Mount



// shouldComponentUpdate(prepops,preState,snapshot)
    // {
    //     console.log(  "shouldComponentUpdate",this.state.count)
    //     if (this.state.count>5 && this.state.count<10)
    //     {
    //         return true;
    //     }
            
        
    // }