import { PureComponent } from 'react';

export default class PureComponents extends PureComponent {
    constructor (){
        super();
        this.state = {
            number : 0,
        }
    }
    render() {
        console.log('render rerenders')
        return (
            <div>
                <h1>The number is {this.state.number}</h1>
                <button onClick={()=>this.setState({number:1})}> Pure Component</button>
            </div>
        )
    }
}
