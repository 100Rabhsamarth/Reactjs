import React, { Component } from 'react'

export class RenderProps extends Component {

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
               {this.props.name(this.state.count,this.ClickHandler)}
            </div>
        )
    }
}

export default RenderProps
