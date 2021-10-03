import { Component } from "react";
import { CommonContext } from "./CommonContext";

class ContextUse extends Component {
  render() {
    return (
      <CommonContext.Consumer>
        {
            ({color})=>(
                <h1 style={{backgroundColor:color}}>Context use 1</h1>
            )
        }
      </CommonContext.Consumer>
    );
  }
}

export default ContextUse;
