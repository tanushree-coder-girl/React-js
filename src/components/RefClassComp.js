import React, { Component, createRef } from 'react'

export default class RefClassComp extends Component {
    constructor(){
        super();
        this.inputRef = createRef();
    }
   handleInput(){
       console.log(this.inputRef.current.value)
       this.inputRef.current.style.color='red'
       this.inputRef.current.style.backgroundColor='yellow'

   }
    render() {
        return (
            <div className='mx-5 my-5'>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.handleInput()}> Input Box</button>
            </div>
        )
    }
}
