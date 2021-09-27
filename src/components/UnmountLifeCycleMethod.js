import React, { Component } from 'react'

export default class UnmountLifeCycleMethod extends Component {
    constructor(){
        super();
        this.state={
            showMe : true
        }
    }

    //compulsory to call render method 
    render() {
        return (
            <>
            {this.state.showMe ? <SecondComp/> : ''}
            <button onClick={ ()=> this.setState ({showMe : !this.state.showMe})}> Click Here</button>
            </>
        )
    }
}

class SecondComp extends Component{
    //componetWillunmount 
    componentWillUnmount(){
        alert('Component is removeed from dom')
        console.log('component will unmount : Unmoutnig phase')
    }

    render(){
        return(
            <h1>Hello world i am child</h1>
        );
    }
}
