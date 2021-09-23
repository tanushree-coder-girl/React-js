import {Component} from 'react';
export default class MountLifeCycleMethod extends Component {

    //constructor method
    constructor(){
        super();  //must call parent constructor by super method 
        console.log('Constructor');
        this.state={
            count : 0
        }
    }

    //getDerivedStateFromProps method
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return {  count : props.counting}
    }

    //componentDidMount method
    componentDidMount(){
        console.log('componentDidMount')
    }

    //render method
    render(){
        console.log('render method');
        return(
            <>
                <h1> Hello all {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}> Click Me</button>
            </>
        );
    }
}