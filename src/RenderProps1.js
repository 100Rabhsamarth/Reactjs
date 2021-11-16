import React, { Component } from 'react'

export class RenderProps1 extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
    }
    ClickHandler=()=>{
        this.setState(preState=>{
            return {count:preState.count +1}
        })
    }
    render() {     
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.setState(this.ClickHandler())}>Click</button>
            </div>
        )
    }
}

export default RenderProps1
