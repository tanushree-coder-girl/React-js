import { Component } from "react";
import ButtonContextUse from "./ButtonContextUse";
import { CommonContext } from "./CommonContext";
import ContextUse from "./ContextUse";
import ContextUse2 from "./ContextUse2";

class Context extends Component {
    constructor (){
        super();
        this.updateColor=(clr)=>{
            this.setState({
                color:clr
            })
        }
        this.state = {
            color:'blue',
            updateColor:this.updateColor
        }
       
    }
  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <h1>Hello context</h1>
        <ContextUse/>
        <ButtonContextUse/>
        <ContextUse2 />
      </CommonContext.Provider>
    );
  }
}

export default Context;
