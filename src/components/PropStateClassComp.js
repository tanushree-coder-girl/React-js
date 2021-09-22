import React, { Component } from 'react'
import StateExample from './StateExample';
export default class PropStateClassComp extends Component {
    constructor (){
        super();
        this.state = {
            count : 0,
            name:'Amit Trivedi'
        }
    }

    fun(){
        //alert('hy')
        this.setState(
            {
                name : 'Abhishek trivedi'
            }
        );
    }

    render() {
      //  console.log(this.props);
        return (
            <div>
                {/* [props] */}
                <h1>name : {this.props.name} </h1>
                <h2>Email : {this.props.email}</h2>

                {/* state */}
                <h1> {this.state.count} </h1>
                <button onClick={()=> this.setState({ count : this.state.count+1})}> increment Num</button>

                <StateExample name={this.state.name}/>
                <button onClick={()=>this.fun()}> Change State varialbe on click </button>
            </div>
        )
    }
}
