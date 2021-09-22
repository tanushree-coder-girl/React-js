import React from 'react';
import Navbar from './components/Navbar';           // default export
import {Home} from './components/Home'              //named export 
import AboutJsx from './components/AboutJsx';          
import Events from './components/Events';          
import PropStateFunctionalComp from './components/PropStateFunctionalComp';
import PropStateClassComp from './components/PropStateClassComp';

function App () {
    return (
        <>
            <Navbar />
            <Home />
            <AboutJsx />
            <Events/>

            {/* props function component*/}
            <PropStateFunctionalComp name={'xyz'} email={'xuz@gmail.com'}/>
            <PropStateFunctionalComp name={'rim'} email={'rim@gmail.com'}/>

            {/* props in class component */}
            <PropStateClassComp  name={'xyz'} email={'xuz@gmail.com'} />
            <PropStateClassComp  name={'1234567'} email={'chawin@gmail.com'} />
        </>
    );
}

export default App;


//1. Functional Components
// function App(){
//     return <h1> Hello world</h1>
// }
// export default App;


//2. Arrow Function Components

// const App = () => {
//     return <h1> Hello world</h1>
// }
// export default App;


//arrow function if return single element then no need to write return keyword.
// const App = () => <h1> Hello world</h1>
// export default App;


//3. class Components

// class App extends React.Component {
//     render(){
//         return (
//             <h1> Hello world</h1>
//         );
//     }
// }
// export default App;


//class Components with constructor 

// class App extends React.Component {
//     constructor (){
//         super();
//         console.log('hello i am construtor')
//     }
//     render(){
//         return (
//             <h1> Hello world</h1>
//         );
//     }
// }
// export default App; 
