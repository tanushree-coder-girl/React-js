import {useState} from 'react';

const LifeCycleFunctionalCompUseEffect = () => {
    const [ name, setName] = useState('tanu');
    return (
        <>
        <h1> My name is {name}</h1>
        <button onClick={()=>setName('Tanushri')}> Full Name </button>
        </>
    );
}

export default LifeCycleFunctionalCompUseEffect
