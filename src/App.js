import React from 'react';
import Navbar from './components/Navbar';           // default export
import {Home} from './components/Home'              //named export 
import AboutJsx from './components/AboutJsx';          

function App () {
    return (
        <>
            <Navbar />
            <Home />
            <AboutJsx />
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

