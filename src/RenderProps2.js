import React, { Component } from 'react'

export class RenderProps2 extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    ClickHandler=()=>{
        this.setState(prState=>{
            return{count:prState.count +1}
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onMouseEnter={()=>this.setState(this.ClickHandler())}>Hover</button>
            </div>
        )
    }
}

export default RenderProps2
